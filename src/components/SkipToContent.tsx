const SkipToContent = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-gold focus:text-primary-foreground focus:rounded-full focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
    >
      Skip to main content
    </a>
  );
};

export default SkipToContent;
