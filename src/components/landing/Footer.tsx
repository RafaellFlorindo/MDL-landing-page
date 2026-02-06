const Footer = () => (
  <footer className="border-t border-border py-10 px-4">
    <div className="container max-w-4xl mx-auto text-center space-y-4">
      <p className="font-display text-lg text-foreground">MESTRE DA LÁBIA</p>
      <p className="font-body text-xs text-muted-foreground leading-relaxed max-w-lg mx-auto">
        Este site não é afiliado ao Facebook, Instagram ou qualquer entidade do Meta Platforms, Inc.
        Todo o conteúdo é de responsabilidade exclusiva do criador. Resultados podem variar de pessoa para pessoa.
      </p>
      <p className="font-body text-xs text-muted-foreground">
        © {new Date().getFullYear()} Mestre da Lábia. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
