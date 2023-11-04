const Text = ({ as: Component = "p", children, ...props }) => (
  <Component {...props}>{children}</Component>
);

export default Text;
