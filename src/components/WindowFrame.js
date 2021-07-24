const WindowFrame = () => {
  const dots = ['border-red-500', 'border-amber-400', 'border-green-400'];
  return (
    <div className='space-x-2 py-2 px-4 border-b border-white/10'>
      {dots.map((color, i) => (
        <i key={i} className={`w-3 h-3 inline-block rounded-full border-2 ${color}`} />
      ))}
    </div>
  );
};

export default WindowFrame;
