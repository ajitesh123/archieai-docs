export default {
  logo: ({ theme }) => (
    <span style={{ 
      fontWeight: 'bold', 
      fontSize: '1.2em', 
      color: theme?.colors?.foreground || 'inherit' 
    }}>
      Archie AI Documentation
    </span>
  ),
  // Set dark mode as default
  // darkMode: true,
  // Optional: Disable the dark mode toggle
  // darkMode: false,
  
  // Optional: Set the default theme (if you want to force dark mode)
  nextThemes: {
    forcedTheme: 'dark',
  },

  // Other configuration options...
  // For example:
  // project: {
  //   link: "https://github.com/ajitesh123/archieai-docs",
  // },
  // docsRepositoryBase: "https://github.com/ajitesh123/archieai-docs/tree/main",
  // ...
}
