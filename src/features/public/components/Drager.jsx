import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import bag from "../../../assets/all/a.png"
import { BsFillBackpack3Fill } from "react-icons/bs";
export default function Drager() {
    const ref = useRef(null);
    const { x, y } = useFollowPointer(ref);

    return (
        <motion.div src={bag} className="z-40"
            ref={ref}
            style={{
                ...ball,
                translateX: x,
                translateY: y,
            }}
        >
            <BsFillBackpack3Fill size={'70'} color="brown" />
        </motion.div>
    );
}

const spring = { damping: 5, stiffness: 10, restDelta: 0.001 };

export function useFollowPointer(ref) {
    const xPoint = useMotionValue(0);
    const yPoint = useMotionValue(0);
    const x = useSpring(xPoint, spring);
    const y = useSpring(yPoint, spring);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const handlePointerMove = ({ clientX, clientY }) => {
            const { left, top, width, height } = element.getBoundingClientRect();
            xPoint.set(
                clientX - element.offsetLeft - element.offsetWidth / 10
            )
            yPoint.set(
                clientY - element.offsetTop - element.offsetHeight / 10
            )
        };

        window.addEventListener("pointermove", handlePointerMove);
        return () => window.removeEventListener("pointermove", handlePointerMove);
    }, [ref, xPoint, yPoint]);

    return { x, y };
}

/**
 * ==============   Styles   ================
 */

const ball = {
    
    
    borderRadius: "50%",
    position: "absolute",
};
