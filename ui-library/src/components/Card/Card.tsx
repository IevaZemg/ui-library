import React from 'react';
import { Button } from '../Button';
import styles from './Card.module.css';

export interface CardAction {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

export interface CardProps {
  image?: string;
  title: string;
  subtitle?: string;
  description?: string;
  actions?: CardAction[];
}

export const Card: React.FC<CardProps> = ({
  image,
  title,
  subtitle,
  description,
  actions = [],
}) => (
  <div className={styles.card}>
    {image && (
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
      </div>
    )}
    <div className={styles.content}>
      <h3 className={styles.title}>{title}</h3>
      {subtitle && <h4 className={styles.subtitle}>{subtitle}</h4>}
      {description && <p className={styles.description}>{description}</p>}
      {actions.length > 0 && (
        <div className={styles.actions}>
          {actions.map((action, index) => (
            <Button
                key={index}
                variant={action.variant ?? 'primary'}
                disabled={action.disabled}
                onClick={action.onClick}
                >
                {action.label}
                </Button>

          ))}
        </div>
      )}
    </div>
  </div>
);
