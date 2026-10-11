import { useState, useMemo, useEffect } from 'react'
import { capabilityNodes, capabilityEdges, capabilityGroups } from '../../data/capabilities'
import { NodeDetail } from './NodeDetail'
import { Section } from '../layout/Section'
import { Tag } from '../ui/Tag'
import { Network, List } from 'lucide-react'
import styles from './Atlas.module.css'

export function Atlas({ selectedNodeId, onSelectNode, onOpenProject }) {
  const [activeGroup, setActiveGroup] = useState('all')
  const [viewMode, setViewMode] = useState('graph') // 'graph' | 'list'

  // Map of all nodes
  const nodeMap = useMemo(() => new Map(capabilityNodes.map((n) => [n.id, n])), [])

  // Filter nodes by cluster
  const filteredNodes = useMemo(() => {
    if (activeGroup === 'all') return capabilityNodes
    return capabilityNodes.filter((n) => n.group === activeGroup)
  }, [activeGroup])

  const filteredNodeIds = useMemo(() => new Set(filteredNodes.map((n) => n.id)), [filteredNodes])

  // Selected node
  const selectedNode = selectedNodeId ? nodeMap.get(selectedNodeId) : null

  // Find all directly connected nodes for selected node
  const connectedNodes = useMemo(() => {
    if (!selectedNodeId) return []
    const results = []

    capabilityEdges.forEach((edge) => {
      if (edge.from === selectedNodeId) {
        const target = nodeMap.get(edge.to)
        if (target) results.push({ node: target, note: edge.note })
      } else if (edge.to === selectedNodeId) {
        const source = nodeMap.get(edge.from)
        if (source) results.push({ node: source, note: edge.note })
      }
    })

    return results
  }, [selectedNodeId, nodeMap])

  const connectedNodeIds = useMemo(
    () => new Set(connectedNodes.map((c) => c.node.id)),
    [connectedNodes]
  )

  // Clear selection on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedNodeId) {
        onSelectNode(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedNodeId, onSelectNode])

  const getLevelBadgeVariant = (level) => {
    switch (level) {
      case 'demonstrated':
        return 'shipped'
      case 'practicing':
        return 'inprogress'
      case 'foundation':
      default:
        return 'learning'
    }
  }

  return (
    <Section
      id="atlas"
      eyebrow="Interactive Architecture"
      title="The Atlas"
      description="A topology map connecting cybersecurity disciplines, networking fundamentals, software development, and isolated lab environments."
      headerAction={
        <div className={styles.viewToggleGroup}>
          <button
            type="button"
            className={`${styles.viewToggleBtn} ${viewMode === 'graph' ? styles.viewToggleActive : ''}`}
            onClick={() => setViewMode('graph')}
            aria-pressed={viewMode === 'graph'}
          >
            <Network size={14} aria-hidden="true" />
            Graph
          </button>
          <button
            type="button"
            className={`${styles.viewToggleBtn} ${viewMode === 'list' ? styles.viewToggleActive : ''}`}
            onClick={() => setViewMode('list')}
            aria-pressed={viewMode === 'list'}
          >
            <List size={14} aria-hidden="true" />
            List
          </button>
        </div>
      }
    >
      {/* Cluster Filter Chips */}
      <div className={styles.filterBar} role="group" aria-label="Filter capabilities by cluster">
        {capabilityGroups.map((group) => {
          const isSelected = activeGroup === group.id
          return (
            <button
              key={group.id}
              type="button"
              className={`${styles.filterChip} ${isSelected ? styles.filterChipActive : ''}`}
              onClick={() => setActiveGroup(group.id)}
              aria-pressed={isSelected}
            >
              {group.label}
            </button>
          )
        })}
      </div>

      {/* Main Grid: Interactive Visualization + Detail Panel */}
      <div className={styles.atlasLayout}>
        <div className={styles.canvasContainer}>
          {viewMode === 'graph' ? (
            <div className={styles.graphWrapper}>
              <svg
                viewBox="0 0 980 500"
                className={styles.graphSvg}
                preserveAspectRatio="xMidYMid meet"
                role="group"
                aria-label="Discipline Topology Map"
              >
                {/* Edges */}
                <g className={styles.edgesLayer}>
                  {capabilityEdges.map((edge) => {
                    const source = nodeMap.get(edge.from)
                    const target = nodeMap.get(edge.to)
                    if (!source || !target) return null

                    const isDirectlyConnected =
                      selectedNodeId &&
                      (edge.from === selectedNodeId || edge.to === selectedNodeId)
                    const isVisibleInFilter =
                      filteredNodeIds.has(edge.from) && filteredNodeIds.has(edge.to)

                    let edgeClass = styles.graphEdge
                    if (selectedNodeId) {
                      edgeClass = isDirectlyConnected ? styles.graphEdgeActive : styles.graphEdgeDim
                    } else if (!isVisibleInFilter && activeGroup !== 'all') {
                      edgeClass = styles.graphEdgeDim
                    }

                    return (
                      <line
                        key={`${edge.from}-${edge.to}`}
                        x1={source.x}
                        y1={source.y}
                        x2={target.x}
                        y2={target.y}
                        className={edgeClass}
                      />
                    )
                  })}
                </g>

                {/* Nodes */}
                <g className={styles.nodesLayer}>
                  {capabilityNodes.map((node) => {
                    const isSelected = selectedNodeId === node.id
                    const isConnected = connectedNodeIds.has(node.id)
                    const isFiltered = filteredNodeIds.has(node.id)

                    let nodeStateClass = ''
                    if (selectedNodeId) {
                      if (isSelected) nodeStateClass = styles.nodeSelected
                      else if (isConnected) nodeStateClass = styles.nodeConnected
                      else nodeStateClass = styles.nodeDim
                    } else if (!isFiltered && activeGroup !== 'all') {
                      nodeStateClass = styles.nodeDim
                    }

                    const isProject = node.group === 'projects'

                    return (
                      <g
                        key={node.id}
                        transform={`translate(${node.x}, ${node.y})`}
                        className={`${styles.node} ${nodeStateClass}`}
                        tabIndex={0}
                        role="button"
                        aria-pressed={isSelected}
                        aria-label={`${node.label} (${node.level} stage, ${node.group} group)`}
                        onClick={() => onSelectNode(isSelected ? null : node.id)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault()
                            onSelectNode(isSelected ? null : node.id)
                          }
                        }}
                      >
                        <circle r="24" className={styles.hitArea} />
                        <circle
                          r={isProject ? 12 : 9}
                          className={`${styles.nodeRing} ${isProject ? styles.projectRing : ''}`}
                        />
                        <circle
                          r={isProject ? 5 : 4}
                          className={`${styles.nodeDot} ${isProject ? styles.projectDot : ''}`}
                        />
                        <text x={14} y={4} className={styles.nodeText}>
                          {node.label}
                        </text>
                        {node.layerTag && (
                          <text x={14} y={16} className={styles.nodeSubtext}>
                            {node.layerTag}
                          </text>
                        )}
                      </g>
                    )
                  })}
                </g>
              </svg>
            </div>
          ) : (
            /* Accessible Text List View */
            <div className={styles.listView}>
              <ul className={styles.listContainer}>
                {filteredNodes.map((node) => {
                  const isSelected = selectedNodeId === node.id
                  return (
                    <li key={node.id}>
                      <button
                        type="button"
                        className={`${styles.listItemBtn} ${isSelected ? styles.listItemActive : ''}`}
                        onClick={() => onSelectNode(isSelected ? null : node.id)}
                      >
                        <div className={styles.listItemMain}>
                          <span className={styles.listItemTitle}>{node.label}</span>
                          <span className={styles.listItemGroup}>{node.group}</span>
                        </div>
                        <Tag variant={getLevelBadgeVariant(node.level)}>
                          {node.level}
                        </Tag>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
          )}

          {/* Taxonomy Stage Legend */}
          <div className={styles.legendBar}>
            <div className={styles.legendItem}>
              <span className={`${styles.legendDot} ${styles.dotFoundation}`} />
              <span>
                <strong>Foundation:</strong> Core principles & coursework (learning stage)
              </span>
            </div>
            <div className={styles.legendItem}>
              <span className={`${styles.legendDot} ${styles.dotPracticing}`} />
              <span>
                <strong>Practicing:</strong> Active hands-on labs & tool usage
              </span>
            </div>
            <div className={styles.legendItem}>
              <span className={`${styles.legendDot} ${styles.dotDemonstrated}`} />
              <span>
                <strong>Demonstrated:</strong> Verified in production or competition
              </span>
            </div>
          </div>
        </div>

        {/* Node Detail Side Panel */}
        <div className={styles.detailContainer}>
          <NodeDetail
            node={selectedNode}
            connectedNodes={connectedNodes}
            onSelectNode={onSelectNode}
            onClearSelection={() => onSelectNode(null)}
            onOpenProject={onOpenProject}
          />
        </div>
      </div>
    </Section>
  )
}
