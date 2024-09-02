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
            <div className="relative">
                <button
                    onClick={onClose}
                    className="absolute -top-10 -right-2 text-red-700 text-3xl"
                >
                    <IoMdClose className="w-8 h-8" />
                </button>
                <Image src={src} alt={alt} className="max-w-full max-h-screen" width={1200} height={100} />
            </div>
        </div>
    );
};

export default ImageModal;
