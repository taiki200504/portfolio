import { useEffect, useState } from "react";

export function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hidden, setHidden] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);

    useEffect(() => {
        const addEventListeners = () => {
            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseenter", onMouseEnter);
            document.addEventListener("mouseleave", onMouseLeave);
            document.addEventListener("mousedown", onMouseDown);
            document.addEventListener("mouseup", onMouseUp);
        };

        const removeEventListeners = () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseenter", onMouseEnter);
            document.removeEventListener("mouseleave", onMouseLeave);
            document.removeEventListener("mousedown", onMouseDown);
            document.removeEventListener("mouseup", onMouseUp);
        };

        const onMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });

            // Check if hovering over a clickable element
            const target = e.target as HTMLElement;
            const isLink = target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button');
            setLinkHovered(!!isLink);
        };

        const onMouseEnter = () => {
            setHidden(false);
        };

        const onMouseLeave = () => {
            setHidden(true);
        };

        const onMouseDown = () => {
            setClicked(true);
        };

        const onMouseUp = () => {
            setClicked(false);
        };

        addEventListeners();
        return () => removeEventListeners();
    }, []);

    // Hide default cursor
    useEffect(() => {
        document.body.classList.add("hide-cursor");
        return () => {
            document.body.classList.remove("hide-cursor");
        };
    }, []);

    if (typeof navigator !== "undefined" && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return null; // Don't show on mobile
    }

    return (
        <>
            <div
                className="cursor-dot"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    opacity: hidden ? 0 : 1,
                }}
            />
            <div
                className="cursor-outline"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    opacity: hidden ? 0 : 1,
                    transform: `translate(-50%, -50%) scale(${clicked ? 0.8 : linkHovered ? 1.5 : 1})`,
                    backgroundColor: linkHovered ? 'rgba(246, 189, 43, 0.1)' : 'transparent',
                    borderColor: linkHovered ? 'rgba(246, 189, 43, 0.8)' : 'rgba(246, 189, 43, 0.5)',
                }}
            />
        </>
    );
}
