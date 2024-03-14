import { Button } from "../button";
import { Container } from "../container";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ["start start", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

  return (
    <div className="bg-background text-white">
      <motion.div
        style={{ opacity }}
        ref={videoContainerRef}
        className="absolute -top-[--header-height] left-0 h-[200vh] w-full"
      >
        <img
          className="sticky top-0 h-screen w-full object-cover"
          src="/apple-tv-rebuild/posters/napoleon.webp"
        />
      </motion.div>
      <Container className="relative z-10 h-[--hero-height] pb-7">
        <motion.div
          className="flex h-full flex-col items-start justify-end"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          whileInView="visible"
          exit="hidden"
          animate="hidden"
          viewport={{ amount: 0.98 }}
        >
          <h1 className="mb-10 text-4xl font-bold md:text-5xl">
            All Apple Originals. <br />
            Only on Apple TV+.
          </h1>
          <Button className="mb-16" size="large">
            Stream now
          </Button>
          <p className="font-semibold">Watch on the 📺 app.</p>
        </motion.div>
      </Container>
    </div>
  );
};
