import { useRef } from 'react'
import { capabilityNodes, capabilityEdges } from '../../data/capabilities'
import { usePointer } from '../../hooks/usePointer'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import styles from './TopologyCanvas.module.css'

export function TopologyCanvas({ onSelectNode, isVisible = true }) {
  const containerRef = useRef(null)
  const reducedMotion = useReducedMotion()
  const pointer = usePointer(containerRef, isVisible && !reducedMotion)

  // Curate a balanced hero subset (12 nodes)
  const heroNodeIds = [
    'tcp-ip',
    'subnetting',
    'network-security',
    'webapp-sec',
    'pentest-fund',
    'ad-privesc',
    'ctf-forensics',
    'kali-linux',
    'virtual-targets',
    'react-dev',
    'proj-cybersecbd',
    'proj-tablocker',
  ]

  const activeNodes = capabilityNodes.filter((n) => heroNodeIds.includes(n.id))
  const nodeMap = new Map(activeNodes.map((n) => [n.id, n]))

  // Edges between active nodes
  const activeEdges = capabilityEdges.filter(
    (e) => nodeMap.has(e.from) && nodeMap.has(e.to)
  )

  const handleNodeClick = (nodeId) => {
    if (onSelectNode) {
      onSelectNode(nodeId)
    }
    const atlasElement = document.getElementById('atlas')
    if (atlasElement) {
      atlasElement.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' })
    }
  }

  const handleKeyDown = (e, nodeId) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleNodeClick(nodeId)
    }
  }

  return (
    <div
      ref={containerRef}
      className={`${styles.canvasWrapper} ${reducedMotion ? styles.reducedMotion : ''}`}
      aria-label="Interactive Hero Topology Map: Disciplines, Tools, and Projects"
    >
      <svg
        viewBox="0 0 960 500"
        className={styles.svg}
        preserveAspectRatio="xMidYMid meet"
        role="group"
      >
        <defs>
          <linearGradient id="edgeGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0.2)" />
          </linearGradient>
          <filter id="nodeGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="var(--accent)" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* Background Grid Accent Lines */}
        <line x1="80" y1="40" x2="880" y2="40" className={styles.gridLine} />
        <line x1="80" y1="460" x2="880" y2="460" className={styles.gridLine} />

        {/* Topology Edges */}
        <g className={styles.edgesGroup}>
          {activeEdges.map((edge) => {
            const source = nodeMap.get(edge.from)
            const target = nodeMap.get(edge.to)
            if (!source || !target) return null

            // Calculate distance to pointer for brightening
            let isNearPointer = false
            if (pointer.active && !reducedMotion) {
              const midX = (source.x + target.x) / 2
              const midY = (source.y + target.y) / 2
              const dist = Math.hypot(pointer.x - midX, pointer.y - midY)
              if (dist < 140) isNearPointer = true
            }

            return (
              <line
                key={`${edge.from}-${edge.to}`}
                x1={source.x}
                y1={source.y}
                x2={target.x}
                y2={target.y}
                className={`${styles.edge} ${isNearPointer ? styles.edgeBright : ''}`}
              />
            )
          })}
        </g>

        {/* Topology Nodes */}
        <g className={styles.nodesGroup}>
          {activeNodes.map((node) => {
            // Subtle pointer attraction physics (max 8px)
            let offsetX = 0
            let offsetY = 0
            let isHovered = false

            if (pointer.active && !reducedMotion) {
              const dx = pointer.x - node.x
              const dy = pointer.y - node.y
              const distance = Math.hypot(dx, dy)

              if (distance < 160 && distance > 0) {
                const pull = (1 - distance / 160) * 8
                offsetX = (dx / distance) * pull
                offsetY = (dy / distance) * pull
                if (distance < 50) isHovered = true
              }
            }

            const currentX = node.x + offsetX
            const currentY = node.y + offsetY
            const isProject = node.group === 'projects'

            return (
              <g
                key={node.id}
                transform={`translate(${currentX}, ${currentY})`}
                className={`${styles.nodeGroup} ${isHovered ? styles.nodeHovered : ''}`}
                tabIndex={0}
                role="button"
                aria-label={`${node.label} (${node.level} level). Click to view details in the Atlas.`}
                onClick={() => handleNodeClick(node.id)}
                onKeyDown={(e) => handleKeyDown(e, node.id)}
              >
                {/* Hit area for easy clicks */}
                <circle r="26" className={styles.hitArea} />

                {/* Outer ring */}
                <circle
                  r={isProject ? 12 : 9}
                  className={`${styles.nodeOuter} ${isProject ? styles.nodeProjectOuter : ''}`}
                />

                {/* Core dot */}
                <circle
                  r={isProject ? 5 : 4}
                  className={`${styles.nodeCore} ${isProject ? styles.nodeProjectCore : ''}`}
                />

                {/* Label */}
                <text
                  x={14}
                  y={4}
                  className={styles.nodeLabel}
                >
                  {node.label}
                </text>

                {/* Technical Annotation */}
                {node.layerTag && (
                  <text
                    x={14}
                    y={16}
                    className={styles.nodeAnnotation}
                  >
                    {node.layerTag}
                  </text>
                )}
              </g>
            )
          })}
        </g>
      </svg>
    </div>
  )
}
