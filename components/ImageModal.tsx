import React from "react";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";

interface ImageModalProps {
    src: string;
    alt: string;
    isOpen: boolean;
    onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ src, alt, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
            <div className="relative p-4">
                <button
                    onClick={onClose}
                    className="absolute -top-4 right-4 text-red-400 text-2xl md:text-3xl"
                >
                    <IoMdClose className="w-6 h-6 md:w-8 md:h-8" />
                </button>
                <Image
                    src={src}
                    alt={alt}
                    className="max-w-full max-h-full object-contain"
                    width={1080}
                    height={1920}
                />
            </div>
        </div>
    );
};

export default ImageModal;
