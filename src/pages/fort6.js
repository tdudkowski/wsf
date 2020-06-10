import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"

export default function Fort6({ data }) {
  return (
    <Layout>
      <SEO title="Fort 6" />
      <article>
        <h2>Fort 6</h2>

        <p>
          Zanim stał się fortem, był schronem. Miał służyć piechocie
          rozwijającej swoje pozycje w rowach strzeleckich, w odległości około
          100 metrów od obiektu.
        </p>

        <p>
          Fort Polanowice zaczęto wznosić w latach 1890 – 1891. Wówczas obiekt
          wyposażony w sześć kazamat, studnię i latrynę, miał być schronem
          piechoty. Jednym z wielu otaczających ówczesne miasto. Pod względem
          wyglądu i rozwiązań konstrukcyjnych Schron Piechoty nr 6 przypominał
          Schron Piechoty nr 1 przy ul. Dembowskiego.
        </p>

        <p>
          Jego konstrukcja złożona jest z trzech warstw, cegły, piasku i betonu.
          Budowlę przykrywa warstwa ziemi dochodząca do 80 centymetrów
          pozwalająca na wprowadzenie maskowania roślinnego. Pierwotnie fasada
          obiektu posiadała sześć dużych dwuskrzydłowych bram i siedem
          jednoskrzydłowych drzwi. Na prawym skrzydle budowli znajdowało się
          zakratowane okienko latryny.
        </p>

        <p>
          W roku 1910 Schron Piechoty nr 6 został przebudowany na Fort.
          Oznaczało to objęcie terenu ziemnym szańcem o odpowiednim dla
          prowadzenia ostrzału profilu. W czołową, skierowaną w stronę
          nieprzyjaciela część ziemnego szańca wbudowano unikatową,
          charakterystyczną dla fortów wrocławskich, betonową pozycje
          strzelecką. Posiadała ona dwa przeciwodłamkowe posterunki
          obserwacyjne. Oprócz tego wybudowano dwa schrony pogotowia oraz
          wartownię. Przebudowano także sam schron piechoty, który od tego
          momentu stanowił koszary fortu. Wejście do fortu, zamykała masywna,
          kuta krata forteczna.
        </p>

        <p>
          Na początku XX wieku, było to jedno z najnowocześniejszych dzieł
          warownych na wschodniej granicy Niemiec. Fort posiadał łączność
          telefoniczną, elektryczną instalację alarmową, elektrycznie napędzany
          system wentylacyjny oraz oświetlenie. Komunikacji między obiektami
          służył system rur głosowych – telegrafu akustycznego.
        </p>

        <p>
          Nowoczesność miała swoją cenę. Sam schron koszarowy kosztował około 50
          000 marek niemieckich, jego rozbudowa w roku 1910 kosztowała w
          przybliżeniu 230 000 marek, przy czym koszt samej betonowej pozycji
          strzeleckiej wyniósł od 21 850 marek do nieco ponad 30 000 marek.
          Każde ze stanowisk obserwacyjnych kosztowało po 500 marek. W tym samym
          momencie dniówka robotnika wykwalifikowanego wynosiła 2 – 3 marki zaś
          praca zwykłego robotnika była warta 1,5 – 2 marek za dzień. Dla
          zrozumienia ogromu wydatków, warto też dodać, że w tym czasie bochenek
          chleba kosztował około 20 fenigów .
        </p>

        <p>
          Po pierwszej wojnie światowej Fort Piechoty nr 6 był jedynie
          epizodycznie wykorzystywany przez wojsko. Taki stan rzeczy trwał aż do
          roku 1938, kiedy to po zlikwidowaniu twierdzy, przyjął przede
          wszystkim funkcję magazynową.
        </p>

        <p>
          Pod koniec drugiej wojny światowej fort został ponownie zmobilizowany.
          Wykopano nowe okopy, rozstawiono zasieki. W 1945 roku, obiekt
          przeszedł chrzest bojowy, biorąc udział w potyczkach z patrolami
          zwiadu oblegających. Miał także swój udział w bitwie stoczonej o
          sąsiednie obiekty w marcu 1945 roku. Fort nie został zdobyty w walce.
          Oddano go po kapitulacji twierdzy, 6 maja 1945 roku.
        </p>

        <p>
          W latach 50. Fort Piechoty nr 6 został zajęty przez Wojsko Polskie i
          użytkowany dalej w charakterze obiektu wojskowego. W roku 1987 po
          prawie stu latach militarnego użytkowania, obiekt został przekazany
          władzy cywilnej. Rozpoczęła się trwająca ponad 20 lat dewastacja.
        </p>
        <div className="img">
          <Img fixed={data.fort.childImageSharp.fixed} />
          <p>Fort 6</p>
        </div>
        <p>
          Pierwszego maja 2013 roku teren fortu znalazł się pod opieką
          Wrocławskiego Stowarzyszenia Fortyfikacyjnego
        </p>

        <h3>1 Schron główny</h3>

        <p>
          Pomieszczenia bytowe dla załogi fortu. Przed modernizacją w 1910 roku,
          schron przeznaczony był dla 250 żołnierzy. Po modernizacji pomieścić
          mógł około 170 żołnierzy. W obiekcie znajdowały się pomieszczenia dla
          wypoczynku, izba dowodzenia, latryna, studnia, oraz podręczne magazyny
          zaopatrzenia. W czasie walki budowla spełniała rolę schronu dla
          rezerw.
        </p>

        <h3>2 Schron pogotowia</h3>

        <p>
          Służył części załogi przeznaczonej do obsadzenia pozycji bojowych w
          razie alarmu. Wnętrze schronu pogotowia wypełniały cztery rzędy ławek.
          Pomieszczenie było ogrzewane piecykiem okopowym. Obiekt był wyposażony
          w oświetlenie lampami naftowymi, grawitacyjną wentylację, elektryczną
          instalację alarmową oraz rury głosowe pozwalające na komunikację z
          innymi budowlami fortu. Schron pogotowia pomieścić mógł 24-25
          żołnierzy.
        </p>
        <div className="img">
          <Img fixed={data.schronPogotowia.childImageSharp.fixed} />
          <p>Schron pogotowia</p>
        </div>
        <h3>3 Wartownia</h3>

        <p>
          Wartownia przeznaczona była do użytkowania przez żołnierzy pełniących
          straż na pozycji strzeleckiej fortu. Obsadę pozycji strzeleckiej,
          stanowił pluton (około 50 żołnierzy). Wartownia była przeznaczona dla
          12 z nich, pozostałym służyły schrony przedpiersiowe umieszczone w
          pozycji strzeleckiej, każdy z takich schronów, pomieścić mógł 8 ludzi.
        </p>

        <h3>4 Betonowa pozycja strzelecka</h3>

        <p>
          Zasadnicze urządzenie bojowe fortu. Gdy wprowadzono go do użycia w
          1910 roku był jednym z najnowocześniejszych rozwiązań. Eksperymenty
          nad rozwiązaniami tego typu trwały już od początku XX wieku. Samo
          urządzenie składa się z kilku części – przedpiersia z ławką
          strzelecką, transzei komunikacyjnej, poprzecznic oraz zaplecznika.
          Konstrukcja zapewniała znacznie lepszą ochronę niż przedpiersie
          ziemnego szańca. Była też znacznie trwalsza.
        </p>
        <div className="img">
          <Img fixed={data.pozycjaStrzelecka.childImageSharp.fixed} />
          <p>Unikalne, doskonale zachowane betonowe pozycje strzeleckie.</p>
        </div>
        <h3>5 Posterunki obserwacyjne.</h3>

        <p>
          Tak zwane ślimaki. Służyły do obserwacji przedpola (terenu przed
          fortem) nawet w czasie ostrzału. Żołnierz prowadzący obserwację
          meldował o sytuacji przed fortem przez rurę głosową załodze schronu
          pogotowia lub oficerom w schronie głównym.
        </p>

        <div className="img">
          <Img fixed={data.stanowiskoObserwacyjne.childImageSharp.fixed} />
          <p>Stanowisko obserwacyjne.</p>
        </div>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    fort: file(relativePath: { eq: "fort.jpg" }) {
      id
      childImageSharp {
        fixed(width: 600) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    schronPogotowia: file(
      relativePath: { eq: "schron-pogotowia-i-wartownia.jpg" }
    ) {
      id
      childImageSharp {
        fixed(width: 600) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    pozycjaStrzelecka: file(relativePath: { eq: "pozycja-strzelecka.jpg" }) {
      id
      childImageSharp {
        fixed(width: 600) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    stanowiskoObserwacyjne: file(
      relativePath: { eq: "stanowisko-obserwacyjne.jpg" }
    ) {
      id
      childImageSharp {
        fixed(width: 600) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
