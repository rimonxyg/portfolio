import { Tag } from '../ui/Tag'
import { ArrowRight, Link2, X, FolderGit2 } from 'lucide-react'
import { projects } from '../../data/projects'
import styles from './NodeDetail.module.css'

export function NodeDetail({ node, connectedNodes = [], onSelectNode, onClearSelection, onOpenProject }) {
  if (!node) {
    return (
      <aside className={styles.emptyPanel} aria-label="Selected Capability Details">
        <p className={styles.emptyText}>
          Select any node in the topology map to inspect its discipline, current learning level, and connected projects.
        </p>
      </aside>
    )
  }

  // Find linked projects
  const linkedProjects = projects.filter((p) =>
    node.relatedProjectIds?.includes(p.id)
  )

  const getLevelVariant = (level) => {
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
    <aside className={styles.panel} aria-label={`Details for ${node.label}`}>
      {/* Header with Title and Clear button */}
      <div className={styles.panelHeader}>
        <div>
          <div className={styles.metaRow}>
            <span className={styles.groupLabel}>{node.group}</span>
            {node.layerTag && <span className={styles.layerTag}>· {node.layerTag}</span>}
          </div>
          <h3 className={styles.title}>{node.label}</h3>
        </div>
        <button
          type="button"
          onClick={onClearSelection}
          className={styles.closeBtn}
          aria-label="Clear selection"
        >
          <X size={18} aria-hidden="true" />
        </button>
      </div>

      {/* Level Badge */}
      <div className={styles.levelRow}>
        <span className={styles.levelLabel}>Current Stage:</span>
        <Tag variant={getLevelVariant(node.level)} className={styles.levelTag}>
          {node.level.toUpperCase()}
        </Tag>
      </div>

      {/* Description Blurb */}
      <p className={styles.blurb}>{node.blurb}</p>

      {/* Related Projects */}
      {linkedProjects.length > 0 && (
        <div className={styles.sectionBlock}>
          <h4 className={styles.sectionTitle}>
            <FolderGit2 size={14} aria-hidden="true" /> Linked Projects
          </h4>
          <ul className={styles.projectList}>
            {linkedProjects.map((p) => (
              <li key={p.id}>
                <button
                  type="button"
                  className={styles.projectButton}
                  onClick={() => onOpenProject ? onOpenProject(p.id) : document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span className={styles.projectTitle}>{p.title}</span>
                  <Tag variant={p.status === 'concept' ? 'concept' : 'inprogress'}>
                    {p.statusLabel}
                  </Tag>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Connected Nodes */}
      {connectedNodes.length > 0 && (
        <div className={styles.sectionBlock}>
          <h4 className={styles.sectionTitle}>
            <Link2 size={14} aria-hidden="true" /> Connected Disciplines ({connectedNodes.length})
          </h4>
          <ul className={styles.connectedList}>
            {connectedNodes.map(({ node: targetNode, note }) => (
              <li key={targetNode.id}>
                <button
                  type="button"
                  className={styles.connectedButton}
                  onClick={() => onSelectNode(targetNode.id)}
                >
                  <div className={styles.connectedInfo}>
                    <span className={styles.connectedLabel}>{targetNode.label}</span>
                    {note && <span className={styles.connectedNote}>{note}</span>}
                  </div>
                  <ArrowRight size={14} className={styles.arrowIcon} aria-hidden="true" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  )
}
