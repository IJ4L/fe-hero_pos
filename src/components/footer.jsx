const Footer = () => {
  return (
    <footer className="flex flex-col space-y-5 mb-12 items-center h-24">
      <div className="flex flex-row items-center justify-center space-x-6">
        <a href="https://www.instagram.com/heropos_/?__pwa=1" className="flex flex-col items-center justify-center space-y-2 group cursor-pointer">
          <div className="w-full flex items-center justify-center">
            <img className="h-14 group-hover:scale-110 transition-transform duration-300" src="src\assets\icons\camera.png" alt="instagram.png" />
          </div>
          <h4 className="w-full text-sm text-secondary group-hover:font-semibold">instagram</h4>
        </a>
        <a href="https://wa.me/+6281241438052" className="flex flex-col items-center justify-center space-y-2 group cursor-pointer">
          <div className="w-full flex items-center justify-center">
            <img className="h-14 group-hover:scale-110 transition-transform duration-300" src="src\assets\icons\whats-app.png" alt="instagram.png" />
          </div>
          <h4 className="w-full text-sm text-secondary group-hover:font-semibold">WhatsApp</h4>
        </a>
      </div>
      <p className="text-secondary text-sm">@2024 <span className="font-bold">HeroPos</span></p>
    </footer>
  );
}

export default Footer;