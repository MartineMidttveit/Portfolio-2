import { PropTypes } from 'prop-types';
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { projects } from '../utils'
import { motion } from 'framer-motion';

const ProjectCard = ({ image, alt, task, title, githubLink, netlifyLink, onClick }) => {
  return (
    <div className="keen-slider__slide" >
      <img onClick={onClick} src={image} alt={alt} className="w-full h-[67%] rounded-lg cursor-pointer shadow-lg" />
      <div className="flex flex-col py-4">
        <div className="flex flex-col mb-4">
          <h4 className="text-lg font-bold text-gray-800">{task}</h4>
          <span className="text-sm text-gray-600">{title}</span>
        </div>
        <div className="flex space-x-4">
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className="flex p-[1rem] h-8 max-w-[130px] w-full rounded-full border border-customBrown gap-[0.5rem] items-center justify-center hover:border-secondary hover:bg-secondary transition-colors duration-500"
          >
            <img src="/github.png" alt="GitHub logo" className="w-5 h-5" />
            <span>GitHub</span>
          </a>
          <a
            href={netlifyLink}
            target="_blank"
            rel="noreferrer"
            className="flex p-[1rem] h-8 max-w-[130px] w-full rounded-full border border-customBrown gap-[0.5rem] items-center justify-center hover:border-secondary hover:bg-secondary transition-colors duration-500"
          >
            <img src="/netlify.png" alt="Netlify icon" className="w-5 h-5" />
            <span>Netlify</span>
          </a>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  task: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  netlifyLink: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

const ProjectDetails = ({ project, onClose }) => {
  return (
    <motion.div initial={{
      opacity: 0,
      y: 50
    }} animate={{
      opacity: 1,
      y: 0
    }} exit={{
      opacity: 0,
      y: 50
    }} transition={{
      duration: 0.5
    }}
      className="flex flex-col md:flex-row items-center md:items-start p-6 bg-white rounded-lg shadow-lg w-full max-w-5xl mx-auto gap-8">
      <img
        src={project.image}
        alt={project.alt}
        className="rounded-lg h-96 max-w-full md:max-w-[50%] object-cover"
      />

      <div className="flex flex-col space-y-4 w-full">

        <div>
          <h4 className="text-2xl font-bold text-gray-800">{project.task}</h4>
          <span className="text-lg text-gray-600">{project.title}</span>
        </div>

        <p className="text-gray-700 leading-relaxed">
          {project.description}
        </p>

        <div className="flex space-x-4">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            className="flex p-[1rem] h-8 max-w-[130px] w-full rounded-full border border-customBrown gap-[0.5rem] items-center justify-center hover:border-secondary hover:bg-secondary transition-colors duration-500"
          >
            <img src="/github.png" alt="GitHub logo" className="w-5 h-5 mr-2" />
            GitHub
          </a>
          <a
            href={project.netlifyLink}
            target="_blank"
            rel="noreferrer"
            className="flex p-[1rem] h-8 max-w-[130px] w-full rounded-full border border-customBrown gap-[0.5rem] items-center justify-center hover:border-secondary hover:bg-secondary transition-colors duration-500"
          >
            <img src="/netlify.png" alt="Netlify icon" className="w-5 h-5 mr-2" />
            Netlify
          </a>
        </div>

        <div>
          <p className="text-gray-600 font-semibold mb-2">BUILT WITH:</p>
          <div className="flex space-x-4">
            <img
              src="/js.png"
              alt="JavaScript Logo"
              className="w-8 h-8 object-contain"
            />
            <img
              src="/html.png"
              alt="HTML Logo"
              className="w-8 h-8 object-contain"
            />
            <img
              src="/css.png"
              alt="CSS Logo"
              className="w-8 h-8 object-contain"
            />
          </div>
        </div>

        <button
          className="flex p-[1rem] h-8 max-w-[180px] w-full rounded-full border border-customBrown gap-[0.5rem] items-center justify-center hover:border-secondary hover:bg-secondary transition-colors duration-500"
          onClick={onClose}
        >
          Close Details
        </button>
      </div>
    </motion.div>
  );
};

ProjectDetails.propTypes = {
  project: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [details, setDetails] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    slides: {
      perView: 3,
      spacing: 48,
    },
    breakpoints: {
      '(max-width: 1280px)': {
        slides: {
          perView: 2,
          spacing: 24,
        },
      },
      '(max-width: 930px)': {
        slides: {
          perView: 1,
          spacing: 16,
        },
      },
    },
  });

  useEffect(() => {
    if (!details) {
      setLoaded(false);
      setTimeout(() => setLoaded(true), 0);
    }
  }, [details]);

  return (
    <section className="py-20 bg-gray-50" id="portfolio">
      <div className="wrapper px-5">
        {details ? (
          <ProjectDetails project={details} onClose={() => setDetails(null)} />
        ) : (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-gray-800 interval">Projects</h2>
              <div className="flex space-x-4">
                {loaded && instanceRef.current && (
                  <>
                    <ArrowLeft
                      className="cursor-pointer disabled:cursor-not-allowed disabled:opacity-80"
                      onClick={(e) =>
                        e.stopPropagation() || instanceRef.current?.prev()
                      }
                      disabled={currentSlide === 0}
                    />
                    <ArrowRight
                      className="cursor-pointer"
                      onClick={(e) =>
                        e.stopPropagation() || instanceRef.current?.next()
                      }
                      disabled={
                        currentSlide ===
                        instanceRef.current.track.details.slides.length - 1
                      }
                    />
                  </>
                )}
              </div>
            </div>
            <p className="text-gray-600 mb-6 interval">
              Click on the projects to see more images and information.
            </p>
            <div ref={sliderRef} className="keen-slider">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  {...project}
                  onClick={() => setDetails(project)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};
