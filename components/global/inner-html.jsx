const InnerHTML = ({ dangerouslySetInnerHTML }) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: dangerouslySetInnerHTML }}
      className="prose prose-headings:text-foreground prose-headings:font-semibold prose-headings:mb-3.5 prose-a:text-p-600 prose-p:text-t-600 prose-p:my-4 max-w-none"
    ></div>
  );
};

export default InnerHTML;
