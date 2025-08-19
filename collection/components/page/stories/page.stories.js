import { html } from "lit";
const meta = {
    title: 'Components/Page',
    argTypes: {},
    args: {},
};
export default meta;
export const Default = {
    render: ({}) => html `
    <mt-page>
      <mt-content>
        <mt-titulo-h1>
          <span slot="pre-title">CAPÍTULO 1</span>
          <span slot="title">ET VOLENT EICILLORA</span>
          <span slot="subtitle">OMNI DUNT</span>
        </mt-titulo-h1>

        <mt-titulo-h2>
          <span>UNTIORERFERE VOLECEPUDIT</span>
        </mt-titulo-h2>

        <mt-titulo-h3>
          <span>SINIHICIAT EATUR A SOLLES DUNTUM</span>
        </mt-titulo-h3>

        <mt-titulo-h5>
          <span>MAGNAM EXPERUM</span>
        </mt-titulo-h5>

        <mt-titulo-resumo>
          <span>A SOLLES DUNTUM</span>
        </mt-titulo-resumo>

        <mt-paragrafo>
          <span>
            Lorem <strong>ipsum</strong> dolor sit amet,
            <em>consectetur adipiscing</em> elit.
          </span>
        </mt-paragrafo>

        <mt-list>
          <ul>
            <li>Lorem Ipsum.</li>
            <li>Lorem Ipsum.</li>
            <li>Lorem Ipsum.</li>
          </ul>
        </mt-list>

        <mt-quadro-01>
          <span slot="title">IPSUM!</span>

          <span slot="text">
            Vitatem quaeprovitia ipita poreri tem unt odioribusae consequas et apis
            doluptatis pro tem voloresequam is volores endantia qui optation rerchil
            iciissintur rat lauditi doluptatur? Onecatur? Iqui coribusciis voluptiandis
            reroviditium et voles reria pelibus dandunt audis eum remporro tempore nus.
            Busdaere, ut rempore ictur? Onecatur? Iqui coribusciis voluptiandis
            reroviditium.
          </span>
        </mt-quadro-01>

        <mt-quadro-02>
          <img slot="left" src="/icon-01.png" alt="image" />
          <h3 slot="title">TISINVENIMET</h3>
          <p slot="text">
            Esimo magnam experum, ium raturemporem dolupta quunt odic tem. Ut untiorerfere
            volecepudit as evel int volore nia con commo int ipiciet fugiti cus. commo int
            ipiciet fugiti cus! volecepudit as evel int volore nia con commo int ipiciet
            fugiti. Evel int volore nia con commo int ipiciet fugiti.
          </p>
        </mt-quadro-02>

        <mt-quadro-pictograma-01>
          <p>
            Sequam rerum quae ius iliquias nonse conese re quiam harcimaximus que id
            eliquatia dolest ipsam, is molorpore nihicto odis minumr eliquatia dolest
            ipsam, is molorpore.
          </p>
        </mt-quadro-pictograma-01>

        <mt-floated>
          <img
            slot="image-right"
            src="/1.png"
            alt="image"
            style="
                  --mt-imagem-floated-image: url(/1.png);
                  --mt-imagem-floated-direction: right;
                  --mt-imagem-floated-margin: 50px 0 0 0;
                "
          />
          <p slot="text">
            Sequam rerum quae ius iliquias nonse conese re quiam harcimaximus que id
            eliquatia dolest ipsam, is molorpore nihicto odis minumr eliquatia dolest
            ipsam, is molorpore. Sequam rerum quae ius iliquias nonse conese re quiam
            harcimaximus que id eliquatia dolest ipsam, is molorpore nihicto odis minumr
            eliquatia dolest ipsam, is molorpore. Sequam rerum quae ius iliquias nonse
            conese re quiam harcimaximus que id eliquatia dolest ipsam, is molorpore
            nihicto odis minumr eliquatia dolest ipsam, is molorpore. Sequam rerum quae
            ius iliquias nonse conese re quiam harcimaximus que id eliquatia dolest ipsam,
            is molorpore nihicto odis minumr eliquatia dolest ipsam, is molorpore. Sequam
            rerum quae ius iliquias nonse conese re quiam harcimaximus que id eliquatia
            dolest ipsam, is molorpore nihicto odis minumr eliquatia dolest ipsam, is
            molorpore.
          </p>
        </mt-floated>

        <mt-columns style="--mt-columns-number: 2; --mt-columns-max-width: 600px">
          <p style="--mt-paragrafo-margin: 0 0 16px 0">
            O equam rerum quae ius iliquias nonse (<span class="mt-fig">fig. 1</span>)!
            Sequam rerum quae ius iliquias nonse conese re quiam harcimaximus que id
            eliquatia dolest ipsam, is molorpore nihicto. Is molorpore nihicto.
          </p>

          <p style="--mt-paragrafo-margin: 0 0 16px 0">
            <strong>Orequam</strong> rerum quae ius iliquias nonse conese re quiam
            harcimaximus que id eliquatia dolest ipsam, is molorpore nihicto. Is
            <strong>molorpore</strong> nihicto. molorpore nihicto. Is molorpore
            <strong>nihicto.</strong>
          </p>

          <p style="--mt-paragrafo-margin: 0 0 16px 0">
            <strong>Orequam</strong> rerum quae ius iliquias nonse conese re quiam
            harcimaximus que id eliquatia dolest ipsam, is
            <strong>molorpore</strong>
            nihicto. Is molorpore nihicto. molorpore nihicto. Is molorpore
            <strong>nihicto.</strong>
          </p>

          <p style="--mt-paragrafo-margin: 0 0 16px 0">
            Nequam <strong>rerum</strong> quae ius iliquias nonse conese re quiam
            harcimaximus que id eliquatia dolest ipsam, is molorpore nihicto odis minum
            adio quas as di <strong>consed</strong> qui cum quaspis is
            <strong>voluptatia</strong> perchil iquiditate <strong>simus</strong>, in
            peris et audae et ra culloriai.
          </p>
        </mt-columns>
      </mt-content>
      <mt-footer>
        <span slot="start">CICLO 1 - MEDCURSO</span>
        <span>6</span>
        <span slot="end">NEFROLOGIA VOL. 1</span>
      </mt-footer>
    </mt-page>
  `,
};
//# sourceMappingURL=page.stories.js.map
