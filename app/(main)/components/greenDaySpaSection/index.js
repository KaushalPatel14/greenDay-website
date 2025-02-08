
import Button from "../commons/button";
import Image from "next/image";
import { motion } from "framer-motion";

const GreenDaySpaSection = ({ GreenDaySpaData,animationKey,sectionRef }) => {
    const { title, description, button, varient, bgImage, image } = GreenDaySpaData || {};

    return (
        <div
            ref={sectionRef}
            className="relative z-10 py-[80px] md:py-[140px] lg:py-[152px] overflow-hidden"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                // NOTE: Remove or comment out backgroundAttachment if it interferes with viewport detection.
                // backgroundAttachment: "fixed",
            }}
        >
            {bgImage && <div className="bg-black/30 px-8 w-full absolute inset-0 -z-10" />}
            <div className="container flex sm:flex-row flex-col items-center justify-center gap-6 lg:gap-8">
                {/* Animated Text Container */}
                <motion.div
                    key={`text-${animationKey}`}
                    className="w-full max-w-[635px]"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                >
                    <h4 className="font-Dosis font-bold">{title}</h4>
                    <p className="SecondaryDescription font-OpenSans mt-[26px] mb-[30px]">
                        {description}
                    </p>
                    <Button label={button} href="#" variant={varient} />
                </motion.div>

                {/* Animated Image Container */}
                <motion.div
                    key={`image-${animationKey}`}
                    className="border-[1px] w-full max-w-[550px] lg:max-w-[648px] h-[380px] sm:h-[500px] md:h-[650px] lg:h-[756px] border-white relative"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
                >
                    <Image
                        src={image}
                        alt="image"
                        width={400}
                        height={400}
                        className="absolute top-2 right-2 w-full max-w-[550px] lg:max-w-[648px] h-[380px] sm:h-[500px] md:h-[650px] lg:h-[756px] object-cover"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default GreenDaySpaSection;
