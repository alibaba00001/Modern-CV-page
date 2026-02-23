"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 49;

const ScrollyCanvas = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Preload Images
    useEffect(() => {
        let isMounted = true;
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;
        let attemptCount = 0;

        for (let i = 0; i <= FRAME_COUNT; i++) {
            const img = new Image();
            const frameNumber = String(i).padStart(3, "0");

            // New sequence format: Whisk_eto2adnjntowigny0ymjrdotmmn1qtlkhtzy0cm_000.jpg
            img.src = `/Sequence/Whisk_eto2adnjntowigny0ymjrdotmmn1qtlkhtzy0cm_${frameNumber}.jpg`;

            img.onload = () => {
                if (isMounted) {
                    // Store image with its intended index to maintain order even if loaded out of sync
                    (img as any).frameIndex = i;
                    loadedImages.push(img);
                    loadedCount++;
                    attemptCount++;

                    checkCompletion();
                }
            };
            img.onerror = () => {
                if (isMounted) {
                    console.warn(`Failed to load frame ${frameNumber}`);
                    attemptCount++;
                    checkCompletion();
                }
            };
        }

        const checkCompletion = () => {
            // Once we have attempted to load all frames (even if some failed)
            if (attemptCount === FRAME_COUNT + 1) {
                // Sort the images by their original frame index to ensure sequential animation
                loadedImages.sort((a: any, b: any) => a.frameIndex - b.frameIndex);
                setImages(loadedImages);

                // Draw first frame when ready
                if (loadedImages.length > 0) {
                    requestAnimationFrame(() => drawImage(loadedImages[0]));
                }
            }
        };

        return () => {
            isMounted = false;
        };
    }, []);

    const drawImage = (img: HTMLImageElement) => {
        if (!canvasRef.current || !img) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Handle high DPI displays
        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();

        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        ctx.scale(dpr, dpr);

        // Object-fit: cover logic
        const imgRatio = img.width / img.height;
        const canvasRatio = rect.width / rect.height;

        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasRatio > imgRatio) {
            drawWidth = rect.width;
            drawHeight = rect.width / imgRatio;
            offsetX = 0;
            offsetY = (rect.height - drawHeight) / 2;
        } else {
            drawWidth = rect.height * imgRatio;
            drawHeight = rect.height;
            offsetX = (rect.width - drawWidth) / 2;
            offsetY = 0;
        }

        ctx.clearRect(0, 0, rect.width, rect.height);
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (images.length === 0) return;
        // Map progress to frame index (1 to 24)
        const frameIndex = Math.min(
            FRAME_COUNT - 1,
            Math.max(0, Math.floor(latest * FRAME_COUNT))
        );

        const img = images[frameIndex];
        if (img) {
            requestAnimationFrame(() => drawImage(img));
        }
    });

    return (
        <section ref={containerRef} className="relative h-[500vh] w-full">
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-[var(--background)]">
                <canvas
                    ref={canvasRef}
                    className="h-full w-full block"
                />
            </div>
        </section>
    );
};

export default ScrollyCanvas;
