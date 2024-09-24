'use client'

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

interface Props {
  scroll: () => void;
}

export default function Description({ scroll }: Props) {

  const redirectTo = (url: string) => {
    window.open(url, '_blank');
  }

  const downloadPdf = () => {
    const path = 'CV_Jonathan_Duran.pdf'
    const link = document.createElement('a');
    link.href = path;
    link.download = path;
    link.click();
  }

  return (
    <>
      <div className="mt-[30px] dark:text-soft-gray text-black">
        <p>
          I’m a fullstack developer specializing in building scalable applications with Node.js and TypeScript. Throughout my career, I’ve worked on projects at various stages, from the ground up to production, as well as maintaining existing projects, always aiming for efficient and robust solutions.
        </p>

        <p className="mt-5">
          Currently, I’m studying engineering and I enjoy constantly learning new technologies and strengthening my knowledge. My focus is on improving both my technical skills and contributing to the success of the projects I’m involved in.
        </p>

        <p className="mt-5">
          If you’d like to collaborate or just connect, feel free to reach out via email or any of my social platforms.
        </p>
      </div>

      <div className='mt-5 flex gap-2'>
        <GitHubIcon sx={{ fill: '#787878' }} className="cursor-pointer" onClick={() => redirectTo('https://github.com/jonathanduran7')} />
        <LinkedInIcon sx={{ fill: '#787878' }} className="cursor-pointer" onClick={() => redirectTo('https://www.linkedin.com/in/duranjonathan7/')} />
        <InstagramIcon sx={{ fill: '#787878' }} className="cursor-pointer" onClick={() => redirectTo('https://www.instagram.com/jonathanduranv/')} />
      </div>

      <div className="flex gap-5 mt-5 text-sm text-black dark:text-white">
        <p className="underline cursor-pointer" onClick={downloadPdf}>View resume</p>
        <p className="underline cursor-pointer" onClick={scroll}>Contact me</p>
      </div>
    </>
  )
}
