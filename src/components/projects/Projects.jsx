import { projects } from '../../data/projects'
import { ProjectCard } from './ProjectCard'
import { ProjectDrawer } from './ProjectDrawer'
import { Section } from '../layout/Section'
import styles from './Projects.module.css'

export function Projects({ activeProjectId, onSelectProject }) {
  // Only render verified projects
  const verifiedProjects = projects.filter((p) => p.verified)

  const selectedProject = verifiedProjects.find((p) => p.id === activeProjectId) || null

  return (
    <Section
      id="projects"
      eyebrow="Architectures & Tooling"
      title="Projects & Labs"
      description="Systems, extensions, and educational concepts developed and studied with strict real-world labeling."
    >
      <div className={styles.grid}>
        {verifiedProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={onSelectProject}
          />
        ))}
      </div>

      {/* Accessible Detail Drawer */}
      <ProjectDrawer
        project={selectedProject}
        onClose={() => onSelectProject(null)}
      />
    </Section>
  )
}
