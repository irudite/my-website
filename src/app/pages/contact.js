const Contact = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <h2 className="tech-font text-xl mb-8 border-b border-black pb-2">FIG_03: Contact Information</h2>
      
      <div className="mb-8 group cursor-pointer">
        <ul className="font-var(font-libre) text-s text-gray-500 mb-1">
          <li className="italic font-bold"><a href="mailto:kerricktruong@gmail.com">kerricktruong@gmail.com</a></li>
          <li><a href="https://github.com/irudite" target="_blank">github.com/irudite</a></li>
          <li><a href="https://www.linkedin.com/in/kerrick-truong/" target="_blank">linkedin.com/in/kerrick-truong</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
