import { GetStaticPropsContext } from "next"

export default function Articles(){

return (
<div className="cgu-container">
  <h1 className="cgu-title-1">Conditions Générales d’Utilisation</h1>

  <p className="cgu-title">Mentions légales</p>
  <p className="cgu-text">
    Photostopper, société à responsabilité limitée au capital de 2 000,00 €, immatriculée au registre du commerce et des
    sociétés d’Arras sous le numéro 900 788 290, dont le siège social est à Arras, au 7 Rue Lagrange. 
  </p>

  <p className="cgu-title">Préambule</p>
  <p className="cgu-text">

    Version en vigueur : 21 avril 2023<br />
    <br />

    Les présentes Conditions Générales d’Utilisation régissent les relations contractuelles entre tout utilisateur du
    Site.<br />
    <br />
    L’utilisateur est invité à lire avec la plus grande attention le présent document et de renouveler sa lecture à
    chaque fois qu’il consulte le Site.<br />
    <br />
    En effet, l’utilisation du Site constitue son acceptation desdites conditions générales d’utilisations.<br />
    <br />
    À cet égard, pour toute question concernant le Site, vous pouvez nous contacter via l’adresse mail suivante :

    equipe@photostopper.fr<br />
    <br />
    Les conditions générales présentées ici peuvent être modifiées afin de prendre en compte des changements liés à la
    législation française ou la modification de logiciels du site. Une consultation de ces Conditions Générales
    d’Utilisation doit donc être réalisée régulièrement par l’Utilisateur.
  </p>

  <p className="cgu-title">Article 1 : Informations éditeur et coordonnées</p>
  <p className="cgu-text">
    Responsable de la publication : Yannis Drici<br />
    <br />
    Hébergeur du site internet : Le site https://photostopper.fr est hébergé par Vercel Inc, dont le siège social est
    situé 440 N Barranca Ave #4133, Covina, CA 91723 joignable par le moyen suivant :privacy@vercel.com / Téléphone :
    (559) 288-7060
  </p>

  <p className="cgu-title">Article 2 : Accès au site </p>
  <p className="cgu-text">
    Le site est accessible gratuitement en tout lieu à tout Utilisateur ayant un accès à Internet. Tous les frais
    supportés par l’Utilisateur pour accéder au service (matériel informatique, logiciels, connexion Internet, etc.)
    sont à sa charge.<br />
    <br />
    Tout événement dû à un cas de force majeure ayant pour conséquence un dysfonctionnement du site ou serveur et sous
    réserve de toute interruption ou modification en cas de maintenance, n’engage pas la responsabilité de
    https://www.photostopper.fr/. Dans ces cas, l’Utilisateur accepte ainsi ne pas tenir rigueur à l’éditeur de toute
    interruption ou suspension de service, même sans préavis.<br />
    <br />
    L’Utilisateur a la possibilité de contacter le site par messagerie électronique à l’adresse email de l’éditeur
    communiqué à l’ARTICLE 1.
  </p>

  <p className="cgu-title">Article 3 : Propriété intellectuelle </p>
  <p className="cgu-text">
    Les marques, logos, signes ainsi que tous les contenus du site (textes, images, son…) font l’objet d’une protection
    par le Code de la propriété intellectuelle et plus particulièrement par le droit d’auteur.<br />
    <br />
    L’utilisateur doit solliciter l’autorisation préalable du site pour toute reproduction, publication, copie des
    différents contenus. Il s’engage à une utilisation des contenus du site dans un cadre strictement privé, toute
    utilisation à des fins commerciales et publicitaires est strictement interdite.<br />
    <br />
    Toute représentation totale ou partielle de ce site par quelque procédé que ce soit, sans l’autorisation expresse de
    l’exploitant du site Internet constituerait une contrefaçon sanctionnée par l’article L 335-2 et suivants du Code de
    la propriété intellectuelle.<br />
    <br />
    Il est rappelé conformément à l’article L122-5 du Code de propriété intellectuelle que l’Utilisateur qui reproduit,
    copie ou publie le contenu protégé doit citer l’auteur et sa source.
  </p>

  <p className="cgu-title">Article 4 : Responsabilité</p>
  <p className="cgu-text">
    PHOTOSTOPPER s’efforce d’assurer au mieux de ses possibilités, l’exactitude et la mise à jour des informations
    diffusées sur ce Site et se réserve le droit de corriger et de modifier, à tout moment, son contenu sans que sa
    responsabilité ne puisse être engagée de ce fait.<br />
    <br />
    En conséquence, PHOTOSTOPPER ne garantit pas la précision et l’exhaustivité des informations disponibles sur ce Site
    et décline toute responsabilité pour tout dommage pouvant résulter directement ou indirectement de son utilisation
    et du crédit accordé à ces informations.<br />
    <br />
    L’utilisateur s’engage, lors de l’utilisation qu’il fera du Site, à ne pas contrevenir aux dispositions législatives
    et réglementaires en vigueur et aux présentes Conditions Générales d’Utilisation. L’Utilisateur est informé que
    toute violation desdites dispositions est susceptible d’entraîner des poursuites judiciaires et sanctions à son
    encontre.<br />
    <br />
    De manière générale, le Site décline toute responsabilité en cas d’utilisation non conforme aux Conditions Générales
    d’Utilisation et de ses services.
  </p>

  <p className="cgu-title">Article 5 : Droit applicable et juridiction compétente </p>
  <p className="cgu-text">
    La législation française s’applique au présent contrat. En cas d’absence de résolution amiable d’un litige né entre
    les parties, les tribunaux français seront seuls compétents pour en connaître.<br />
    <br />
    Pour toute question relative à l’application des présentes CGU, vous pouvez joindre l’éditeur aux coordonnées
    inscrites à l’ARTICLE 1.
  </p>
</div>

)
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {}, // will be passed to the page component as props
  }
}