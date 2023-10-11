interface iButton{
text:string;
color:string;
w:string;
h:string;
bg:string;
icons: string;
}
const Card :React.FC <iButton>= ({text,color,w,h,bg,icons}) => {
  return (

<div className={`text-[${color}] max-md:w-full  w-[${w}] h-[${h}] bg-[${bg}] icons-[${icons}] justify-center items-center flex rounded-[10px]` }>
{text}
{icons}

    </div>

  )
}

export default Card