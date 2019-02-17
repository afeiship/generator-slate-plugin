export default {
  renderMark(inProps, inEditor, inNext) {
    const { children, ...attributes } = inProps;
    switch (inProps.mark.type) {
      // case 'bold':
      //   return <strong {...attributes}> {children}</strong>;
      default:
        return inNext();
    }
  }
};
