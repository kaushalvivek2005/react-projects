import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';

const Card = ({ 
  title, 
  description, 
  image,
  imageAlt,
  children,
  variant = 'elevated', // elevated, outlined, flat
  hoverable = false,
  onClick = null,
  headingLevel = 'h3', // h2, h3, h4
  loading = false,
  imageError = null,
  className = '',
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageLoadError, setImageLoadError] = useState(false);

  // Heading component based on level
  const HeadingTag = headingLevel;

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageLoadError(true);
    if (imageError) {
      imageError();
    }
  };

  const cardClasses = `${styles.card} ${styles[variant]} ${
    hoverable ? styles.hoverable : ''
  } ${onClick ? styles.clickable : ''} ${className}`;

  const cardProps = {
    className: cardClasses,
    role: onClick ? 'button' : 'article',
    tabIndex: onClick ? 0 : undefined,
    onClick: onClick,
    onKeyDown: onClick ? (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onClick();
      }
    } : undefined,
    'aria-label': onClick ? `${title}: ${description}` : undefined,
  };

  return (
    <div {...cardProps}>
      {/* Image Section */}
      {image && (
        <div className={styles.imageWrapper}>
          {loading && (
            <div className={styles.skeleton} aria-hidden="true" />
          )}
          {!imageLoadError ? (
            <img
              src={image}
              alt={imageAlt || title || 'Card image'}
              className={`${styles.image} ${
                imageLoaded ? styles.imageLoaded : ''
              }`}
              onLoad={handleImageLoad}
              onError={handleImageError}
              loading="lazy"
            />
          ) : (
            <div 
              className={styles.imagePlaceholder}
              role="img"
              aria-label="Image failed to load"
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 6h16M4 6v12a2 2 0 002 2h12a2 2 0 002-2V6m0 0V4a2 2 0 00-2-2H6a2 2 0 00-2 2v2"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
          )}
        </div>
      )}

      {/* Content Section */}
      <div className={styles.content}>
        {title && (
          <HeadingTag className={styles.title}>{title}</HeadingTag>
        )}

        {description && (
          <p className={styles.description}>{description}</p>
        )}

        {/* Children/Footer */}
        {children && (
          <div className={styles.footer}>{children}</div>
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.oneOf(['elevated', 'outlined', 'flat']),
  hoverable: PropTypes.bool,
  onClick: PropTypes.func,
  headingLevel: PropTypes.oneOf(['h2', 'h3', 'h4']),
  loading: PropTypes.bool,
  imageError: PropTypes.func,
  className: PropTypes.string,
};

Card.displayName = 'Card';

export default Card;