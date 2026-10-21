import { FormEvent, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import logoMark from './assets/logo-m.svg'
import praiseImg from './assets/projectos/praise-the-lord.webp'
import kalembeImg from './assets/projectos/kalembe.webp'
import feedfoodImg from './assets/projectos/feedfood.webp'
import ozignImg from './assets/projectos/ozign.webp'
import arlindoImg from './assets/projectos/arlindo-lume.webp'
import heroPhoto from './assets/hero-photo.png'

type IconName =
  | 'spark'
  | 'arrow'
  | 'menu'
  | 'close'
  | 'brand'
  | 'social'
  | 'flyer'
  | 'food'
  | 'video'
  | 'web'
  | 'ads'
  | 'check'
  | 'quote'
  | 'mail'
  | 'pin'
  | 'send'
  | 'plus'

type Project = {
  name: string
  category: string
  description: string
  accent: string
  number: string
  image?: string
}

const services = [
  { icon: 'brand' as IconName, title: 'Identidade Visual & Branding', description: 'Um sistema visual coerente para a sua marca ser reconhecida e lembrada em cada ponto de contacto.' },
  { icon: 'spark' as IconName, title: 'Logótipos profissionais', description: 'Símbolos com intenção, personalidade e flexibilidade para crescer com o seu negócio.' },
  { icon: 'social' as IconName, title: 'Design para Redes Sociais', description: 'Conteúdo que trava o scroll, comunica valor e cria consistência no feed da sua marca.' },
  { icon: 'flyer' as IconName, title: 'Artes promocionais & flyers', description: 'Campanhas visuais claras e atrativas para transformar atenção em pedidos e vendas.' },
  { icon: 'food' as IconName, title: 'Menus & materiais para restaurantes', description: 'Menus apetecíveis e materiais que facilitam a escolha e valorizam cada produto.' },
  { icon: 'video' as IconName, title: 'Edição de vídeo para Reels & anúncios', description: 'Vídeos dinâmicos, com ritmo e mensagem, desenhados para reter atenção até ao fim.' },
  { icon: 'web' as IconName, title: 'Landing pages & presença digital', description: 'Páginas objetivas que apresentam a sua oferta e guiam visitantes para a ação certa.' },
  { icon: 'ads' as IconName, title: 'Campanhas Facebook, Instagram & TikTok Ads', description: 'Criatividade alinhada com estratégia para alcançar as pessoas certas e gerar movimento.' },
]

const projects: Project[] = [
  { name: 'Praise The Lord', category: 'Landing Page · Identidade Digital', description: 'Landing page funcional e presença digital construída para comunicar propósito com clareza e confiança.', accent: 'coral', number: '01', image: praiseImg },
  { name: 'Feedfood', category: 'Design Promocional · Social Media', description: 'Estratégias visuais, artes promocionais e conteúdos pensados para despertar apetite e atrair clientes.', accent: 'lime', number: '02', image: feedfoodImg },
  { name: 'Ozign', category: 'Branding · Social Media', description: 'Conteúdo visual e estratégia digital para dar mais força, clareza e consistência à marca.', accent: 'violet', number: '03', image: ozignImg },
  { name: 'Arlindo & Lume Catering', category: 'Identidade Visual · Social Media', description: 'Identidade visual e conteúdos promocionais que traduzem experiência, sabor e cuidado em cada detalhe.', accent: 'gold', number: '04', image: arlindoImg },
  { name: 'Kalembe Protecção Industrial', category: 'Identidade Visual · Institucional', description: 'Materiais visuais padronizados para uma comunicação institucional sólida, profissional e reconhecível.', accent: 'blue', number: '05', image: kalembeImg },
]

const processSteps = [
  { number: '01', title: 'Briefing', description: 'Entendo o seu negócio, objetivos, público e o que precisa de mudar.' },
  { number: '02', title: 'Conceito', description: 'Transformo contexto em direção criativa e proposta visual com intenção.' },
  { number: '03', title: 'Produção', description: 'Dou vida ao design ou campanha com atenção ao detalhe e ao resultado.' },
  { number: '04', title: 'Entrega & suporte', description: 'Entrego, recolho revisões e continuo disponível para o próximo passo.' },
]

const differentiators = [
  'Design com foco em resultados e conversão',
  'Experiência em marketing digital e tráfego pago',
  'Criação de identidade visual completa',
  'Domínio de ferramentas profissionais de design e edição',
  'Atendimento próximo e personalizado',
  'Disponibilidade para Maputo e trabalho remoto',
]

function Icon({ name, size = 22 }: { name: IconName; size?: number }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true }
  switch (name) {
    case 'arrow': return <svg {...common}><path d="M5 12h13" /><path d="m13 6 6 6-6 6" /></svg>
    case 'menu': return <svg {...common}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
    case 'close': return <svg {...common}><path d="m6 6 12 12M18 6 6 18" /></svg>
    case 'brand': return <svg {...common}><path d="M4 18 12 4l8 14" /><path d="M7 13h10M8.5 10.5h7" /></svg>
    case 'social': return <svg {...common}><rect x="4" y="4" width="16" height="16" rx="4" /><circle cx="12" cy="12" r="3.5" /><path d="M17.5 6.7h.01" /></svg>
    case 'flyer': return <svg {...common}><path d="m6 3 12 3v15L6 18z" /><path d="M9 8h6M9 12h6M9 16h3" /></svg>
    case 'food': return <svg {...common}><path d="M7 3v8M4.5 3v5a2.5 2.5 0 0 0 5 0V3M7 11v10M16 3v18M16 3c2.3 1.8 3.2 4.1 3.2 6.8H16" /></svg>
    case 'video': return <svg {...common}><rect x="3" y="6" width="13" height="12" rx="2" /><path d="m16 10 5-3v10l-5-3z" /></svg>
    case 'web': return <svg {...common}><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M8 14h8M8 17h5" /></svg>
    case 'ads': return <svg {...common}><path d="M4 12a8 8 0 0 1 14.5-4.6M20 12a8 8 0 0 1-14.5 4.6" /><path d="m7 5-1.5 3.5L9 10M17 19l1.5-3.5L15 14" /><path d="M12 8v8M9.5 10.5 12 8l2.5 2.5" /></svg>
    case 'spark': return <svg {...common}><path d="m12 3 1.5 6.5L20 11l-6.5 1.5L12 19l-1.5-6.5L4 11l6.5-1.5z" /><path d="m19 3 .5 2.5L22 6l-2.5.5L19 9l-.5-2.5L16 6l2.5-.5z" /></svg>
    case 'check': return <svg {...common}><path d="m5 12 4 4L19 6" /></svg>
    case 'quote': return <svg {...common}><path d="M8 11H5a3 3 0 0 1 3-3V5a6 6 0 0 0-6 6v8h6zM22 11h-3a3 3 0 0 1 3-3V5a6 6 0 0 0-6 6v8h6z" /></svg>
    case 'mail': return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>
    case 'pin': return <svg {...common}><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>
    case 'send': return <svg {...common}><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
    case 'plus': return <svg {...common}><path d="M12 5v14M5 12h14" /></svg>
    default: return null
  }
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('')
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const [formSent, setFormSent] = useState(false)

  useEffect(() => {
    document.body.style.overflow = activeProject || menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [activeProject, menuOpen])

  const goToContact = (service = '') => {
    setSelectedService(service)
    setMenuOpen(false)
    window.setTimeout(() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' }), 30)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFormSent(true)
  }

  return (
    <div className="site-shell">
      <div className="grain" aria-hidden="true" />
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Maucule Artur Nubo — início">
          <span className="wordmark-mark"></span>
          <img className="wordmark-logo" src={logoMark} alt="" width="36" height="24" /><span className="wordmark-text">MAUCULE<span>.</span></span>
        </a>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Navegação principal">
          <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a>
          <a href="#servicos" onClick={() => setMenuOpen(false)}>Serviços</a>
          <a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfólio</a>
          <a href="#processo" onClick={() => setMenuOpen(false)}>Processo</a>
          <button className="nav-cta" onClick={() => goToContact()}>Vamos conversar <Icon name="arrow" size={16} /></button>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen}>
          <Icon name={menuOpen ? 'close' : 'menu'} size={22} />
        </button>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> Designer gráfico <span className="eyebrow-slash">/</span> Maputo</div>
            <p className="hero-name">MAUCULE ARTUR NUBO</p>
            <h1>Design que faz<br /><em>marcas moverem-se.</em></h1>
            <p className="hero-lede">Transformo marcas em identidades visuais memoráveis, com design estratégico para redes sociais, campanhas e materiais promocionais.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="https://wa.me/258879577008" target="_blank" rel="noreferrer">Pedir orçamento <Icon name="arrow" size={18} /></a>
              <a className="button button-ghost" href="#portfolio">Ver portfólio <span className="button-line" /></a>
            </div>
            <div className="hero-proof"><span>Disponível para</span><strong>projectos locais & remotos</strong><span className="proof-divider" /><span>01—08</span><span></span></div>
          </div>
          <div className="hero-visual">
            <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
            <div className="hero-photo"><img src={heroPhoto} alt="Retrato de Maucule" width={400} height={400} decoding="async" /></div>
            <div className="hero-tag tag-top">01<br /><span>visual<br />thinking</span></div>
            <div className="hero-tag tag-bottom"><span>scroll<br />para ver</span><Icon name="arrow" size={15} /></div>
            <div className="hero-cross cross-one">+</div><div className="hero-cross cross-two">+</div>
          </div>
        </section>

        <section className="marquee" aria-label="Áreas de especialização">
          <div className="marquee-track"><span>IDENTIDADE VISUAL</span><b>✳</b><span>SOCIAL MEDIA</span><b>✳</b><span>TRÁFEGO DIGITAL</span><b>✳</b><span>CONTEÚDO QUE CONVERTE</span><b>✳</b><span>IDENTIDADE VISUAL</span><b>✳</b><span>SOCIAL MEDIA</span><b>✳</b></div>
        </section>

        <section className="about section-pad" id="sobre">
          <div className="section-intro"><p className="section-kicker">01 / sobre</p><h2>O visual é o primeiro<br /><em>sim da sua marca.</em></h2></div>
          <div className="about-content">
            <p className="about-lede">Uma boa marca não precisa apenas de atenção. Precisa de <strong>clareza, personalidade e direção</strong> para transformar atenção em confiança.</p>
            <div className="about-grid">
              <p>Maucule Artur Nubo é designer gráfico e gestor de tráfego digital, sediado em Maputo. Cria conteúdos digitais, identidades visuais e campanhas para negócios que querem apresentar-se melhor e crescer com intenção.</p>
              <p>Com formação em Engenharia Informática, combina pensamento visual com estratégia de marketing digital. Trabalha com Photoshop, Illustrator, Premiere Pro, CapCut, DaVinci e ferramentas de inteligência artificial para criar com mais agilidade e impacto.</p>
            </div>
            <div className="tool-row"><span>Ferramentas que fazem parte do processo</span><div className="tool-list"><b>Ps</b><b>Ai</b><b>Pr</b><b>DaV</b><b>Cp</b><b>AI</b></div></div>
          </div>
        </section>

        <section className="services section-pad" id="servicos">
          <div className="section-heading-row"><div><p className="section-kicker">02 / o que faço</p><h2>Ideias bonitas.<br /><em>Resultados melhores.</em></h2></div><p className="section-note">Cada entrega parte do seu negócio e chega a uma solução visual com propósito — pronta para ser vista, entendida e escolhida.</p></div>
          <div className="services-grid">{services.map((service, index) => <article className="service-card" key={service.title}><div className="service-card-top"><span className="service-index">0{index + 1}</span><span className="service-icon"><Icon name={service.icon} size={24} /></span></div><h3>{service.title}</h3><p>{service.description}</p><button className="text-button" onClick={() => goToContact(service.title)}>Solicitar serviço <Icon name="arrow" size={16} /></button></article>)}</div>
        </section>

        <section className="portfolio section-pad" id="portfolio">
          <div className="section-heading-row portfolio-heading"><div><p className="section-kicker">03 / projectos seleccionados</p><h2>Feito para ser<br /><em>lembrado.</em></h2></div><span className="portfolio-count">05 <small>projectos</small></span></div>
          <div className="project-list">{projects.map((project) => <article className={`project-card ${project.accent}`} key={project.name}><div className="project-meta"><span>{project.number}</span><span>{project.category}</span></div><div className="project-visual">{project.image ? <img src={project.image} alt={`Projecto ${project.name}`} loading="lazy" decoding="async" /> : <><div className="project-shape shape-one" /><div className="project-shape shape-two" /><div className="project-word">{project.name.split(' ')[0]}<span>.</span></div><div className="placeholder-label">imagem principal<br />a substituir</div><div className="project-slots" aria-label={`Três espaços para imagens de ${project.name}`}><span>02</span><span>03</span><span>04</span></div></>}</div><div className="project-info"><div><h3>{project.name}</h3><p>{project.description}</p></div><button className="project-link" onClick={() => setActiveProject(project)}>Ver projeto <Icon name="arrow" size={16} /></button></div></article>)}</div>
        </section>

        <section className="process section-pad" id="processo">
          <div className="section-intro"><p className="section-kicker">04 / como trabalho</p><h2>Da primeira ideia<br /><em>ao último detalhe.</em></h2></div>
          <div className="process-list">{processSteps.map((step, index) => <div className="process-step" key={step.number}><div className="process-number">{step.number}</div><div className="process-line"><span style={{ width: `${(index + 1) * 25}%` }} /></div><h3>{step.title}</h3><p>{step.description}</p></div>)}</div>
        </section>

        <section className="differentiators section-pad">
          <div className="diff-statement"><p className="section-kicker">05 / porquê trabalhar comigo</p><h2>Não entrego só peças.<br /><em>Entrego direcção.</em></h2><p>Porque quando o visual e a estratégia falam a mesma língua, a marca deixa de parecer mais uma.</p><a className="button button-primary" href="https://wa.me/258879577008" target="_blank" rel="noreferrer">Falar sobre o meu projecto <Icon name="arrow" size={18} /></a></div>
          <div className="diff-list">{differentiators.map((item, index) => <div className="diff-item" key={item}><span>0{index + 1}</span><p>{item}</p><Icon name="check" size={19} /></div>)}</div>
        </section>

        <section className="contact section-pad" id="contacto">
          <div className="contact-intro"><p className="section-kicker">06 / vamos criar</p><h2>Uma marca que<br /><em>fica na memória.</em></h2><p>Conte-me onde está e onde quer chegar. Respondo com uma direção clara para o próximo passo.</p><div className="contact-details"><a href="https://wa.me/258879577008" target="_blank" rel="noreferrer"><span className="detail-icon"><Icon name="send" size={18} /></span><span><small>WhatsApp</small>+258 87 957 7008</span></a><div><span className="detail-icon"><Icon name="pin" size={18} /></span><span><small>Base</small>Maputo, Moçambique · Remoto</span></div><div><span className="detail-icon"><Icon name="mail" size={18} /></span><span><small>E-mail</small><strong className="editable">adicionar e-mail</strong></span></div></div></div>
          <div className="contact-form-wrap">{formSent ? <div className="form-success"><span className="success-icon"><Icon name="check" size={30} /></span><p className="section-kicker">mensagem recebida</p><h3>Obrigado pelo contacto.</h3><p>O formulário está pronto para ser ligado ao seu e-mail ou CRM. Enquanto isso, pode falar comigo directamente pelo WhatsApp.</p><a className="button button-primary" href="https://wa.me/258879577008" target="_blank" rel="noreferrer">Abrir WhatsApp <Icon name="arrow" size={18} /></a><button className="text-button" onClick={() => setFormSent(false)}>Enviar outra mensagem</button></div> : <form className="contact-form" onSubmit={handleSubmit}><div className="form-heading"><span>01</span><p>Vamos começar pelo princípio.</p></div><label>O seu nome<input name="name" type="text" placeholder="Como se chama?" required /></label><label>Empresa<input name="company" type="text" placeholder="Nome da marca ou empresa" /></label><label>Serviço pretendido<select name="service" value={selectedService} onChange={(event) => setSelectedService(event.target.value)}><option value="">Escolha uma opção</option>{services.map((service) => <option key={service.title} value={service.title}>{service.title}</option>)}</select></label><label>Mensagem<textarea name="message" rows={4} placeholder="Conte-me um pouco sobre o projecto..." required /></label><button className="button button-primary submit-button" type="submit">Enviar pedido <Icon name="send" size={17} /></button><p className="form-footnote">Sem compromisso. Apenas uma conversa para perceber como posso ajudar.</p></form>}</div>
        </section>
      </main>

      <footer className="site-footer"><div className="footer-top"><a className="wordmark" href="#top"><span className="wordmark-mark"></span><img className="wordmark-logo" src={logoMark} alt="" width="36" height="24" /><span className="wordmark-text">MAUCULE<span>.</span></span></a><p>Design gráfico & estratégia digital<br />para marcas com algo a dizer.</p><div className="social-links"><a href="#contacto">Instagram <span>↗</span></a><a href="#contacto">TikTok <span>↗</span></a><a href="#contacto">LinkedIn <span>↗</span></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Maucule Artur Nubo</span><span>Maputo, Moçambique</span><a href="#top">Voltar ao topo ↑</a></div></footer>
      <a className="floating-whatsapp" href="https://wa.me/258879577008" target="_blank" rel="noreferrer" aria-label="Falar com Maucule no WhatsApp"><span>WhatsApp</span><Icon name="arrow" size={18} /></a>

      {activeProject && <div className="modal-backdrop" role="presentation" onClick={() => setActiveProject(null)}><div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setActiveProject(null)} aria-label="Fechar projeto"><Icon name="close" size={21} /></button><div className={`modal-visual ${activeProject.accent}`}>{activeProject.image ? <img src={activeProject.image} alt={`Projecto ${activeProject.name}`} /> : <><div className="project-word">{activeProject.name.split(' ')[0]}<span>.</span></div><div className="placeholder-label">imagem principal<br />a substituir</div></>}</div><p className="section-kicker">{activeProject.category}</p><h2 id="modal-title">{activeProject.name}</h2><p>{activeProject.description}</p><div className="modal-shots"><div>imagem 01</div><div>imagem 02</div><div>imagem 03</div></div><button className="button button-primary" onClick={() => { setActiveProject(null); goToContact(activeProject.name) }}>Quero falar sobre este projecto <Icon name="arrow" size={18} /></button></div></div>}
    </div>
  )
}

export default App

createRoot(document.getElementById('root')!).render(<App />)
