import { useState } from 'react'
import { links } from '../../data/links'
import { Section } from '../layout/Section'
import { Button } from '../ui/Button'
import { Mail, Copy, Check, ArrowUpRight } from 'lucide-react'
import { LinkedInIcon, GitHubIcon, FacebookIcon, InstagramIcon } from '../ui/BrandIcons'
import styles from './ContactLinks.module.css'

export function ContactLinks() {
  const [copied, setCopied] = useState(false)

  const emailLink = links.find((l) => l.id === 'email')
  const otherLinks = links.filter((l) => l.id !== 'email' && l.verified)

  const handleCopyEmail = async () => {
    if (!emailLink) return
    try {
      await navigator.clipboard.writeText(emailLink.handle)
      setCopied(true)
      setTimeout(() => setCopied(false), 3000)
    } catch {
      // Fallback if clipboard API not available
      setCopied(true)
      setTimeout(() => setCopied(false), 3000)
    }
  }

  const getIcon = (id) => {
    switch (id) {
      case 'linkedin':
        return <LinkedInIcon size={18} />
      case 'github':
        return <GitHubIcon size={18} />
      case 'facebook':
        return <FacebookIcon size={18} />
      case 'instagram':
        return <InstagramIcon size={18} />
      default:
        return <ArrowUpRight size={18} aria-hidden="true" />
    }
  }

  return (
    <Section
      id="contact"
      eyebrow="Direct Connection"
      title="Get In Touch"
      description="Whether you have questions regarding network design, security research discussions, or opportunities — reach out directly."
    >
      <div className={styles.container}>
        {/* Email Direct Box */}
        {emailLink && (
          <div className={styles.emailCard}>
            <div className={styles.emailInfo}>
              <span className={styles.emailLabel}>DIRECT CONTACT EMAIL</span>
              <a href={emailLink.url} className={styles.emailAddress}>
                <Mail size={20} className={styles.mailIcon} aria-hidden="true" />
                <span>{emailLink.handle}</span>
              </a>
            </div>

            <div className={styles.emailActions}>
              <Button as="a" href={emailLink.url} variant="primary" size="md">
                Send Email
              </Button>
              <button
                type="button"
                className={styles.copyBtn}
                onClick={handleCopyEmail}
                aria-label="Copy email address to clipboard"
              >
                {copied ? (
                  <>
                    <Check size={16} className={styles.checkIcon} aria-hidden="true" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} aria-hidden="true" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            {/* Screen Reader Live Confirmation */}
            <span className="visuallyHidden" aria-live="polite">
              {copied ? 'Email address copied to clipboard' : ''}
            </span>
          </div>
        )}

        {/* Public Verified Profiles */}
        <div className={styles.socialsGrid}>
          {otherLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialCard}
            >
              <div className={styles.socialHeader}>
                <div className={styles.iconWrapper}>{getIcon(link.id)}</div>
                <ArrowUpRight size={16} className={styles.externalIcon} aria-hidden="true" />
              </div>
              <span className={styles.socialLabel}>{link.label}</span>
              <span className={styles.socialHandle}>@{link.handle}</span>
            </a>
          ))}
        </div>
      </div>
    </Section>
  )
}
