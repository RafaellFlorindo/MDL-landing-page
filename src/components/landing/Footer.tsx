const Footer = () => (
  <footer className="border-t border-border py-10 px-4">
    <div className="container max-w-4xl mx-auto text-center space-y-4">
      <p className="font-display text-lg text-foreground">MESTRE DA LÁBIA</p>
      <p className="font-body text-xs text-muted-foreground leading-relaxed max-w-lg mx-auto">
  
      </p>
      <p className="font-body text-xs text-muted-foreground">
        © {new Date().getFullYear()} Mestre da Lábia. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
