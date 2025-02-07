import React from "react";

const Advantage = () => {
    return (
        <section id="preview" className="w-full py-16 md:py-32 md:px-12 xl:px-0 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="space-y-4 text-center md:text-left">
                <p className="px-4 py-0.5 border border-secondary inline-block text-md font-bold text-secondary rounded-full cursor-pointer hover:border-primary">
                    Tools
                </p>
                <h1 className="text-3xl md:text-4xl xl:text-5xl font-normal text-secondary leading-8">
                    Faster and easier
                    <br />
                    Application
                    <br />
                    Management
                </h1>
                <h4 className="text-lg md:text-md text-secondary mt-4">
                    Manage your store with our tools. You can create custom
                    <br />
                    applications that suit your needs
                </h4>
                <div className="animate-slide-up w-full flex justify-center md:justify-start space-x-8 mt-4">
                    <div className="flex space-x-2">
                        <img className="size-6" src="src\assets\icons\check.png" alt="check.png" />
                        <span className="text-secondary text-sm">Easy to Use</span>
                    </div>
                    <div className="flex space-x-2">
                        <img className="size-6" src="src\assets\icons\check.png" alt="check.png" />
                        <span className="text-secondary text-sm">Stable Version</span>
                    </div>
                </div>
            </div>
            <div>
                <img
                    className="h-48 md:h-80 max-w-full rounded-lg"
                    src="src/assets/images/pos.svg"
                    alt="advantage"
                />
            </div>
        </section>
    );
};

export default Advantage;
