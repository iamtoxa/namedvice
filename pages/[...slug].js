import NavBar from "Components/NavBar/NavBar";
import Brand from "Components/Brand/Brand";
import Footer from "Components/Footer/Footer";
import Background from "Components/Background/Background";
import DynBlock from "../components/DyncmicBlock/DynamicBlock";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { useRouter } from "next/router";

export default function Page({ page, pageLang }) {
  const router = useRouter();

  return (
    <div>
      <main className="page">
        <Brand pageLang={pageLang} />
        <NavBar pageLang={pageLang} />
        <Background {...page.Background} />

        <div className="page_container">
          <SwitchTransition>
            <CSSTransition
              key={router.asPath}
              addEndListener={(node, done) => {
                node.addEventListener("transitionend", done, false);
              }}
              classNames="fade"
            >
              <>
                {page.content?.map((page_item, index) => {
                  return (
                    <DynBlock key={index} {...page_item} pageLang={pageLang} />
                  );
                })}
              </>
            </CSSTransition>
          </SwitchTransition>
        </div>

        <Footer pageLang={pageLang} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  var pageLang = context.req?.headers['accept-language']?.split(';')[0].split(',')[0].substr(0,2) || 'en';
  try {
    const pageSlug = context.query.slug
      .filter((el) => !["en", "ru"].includes(el))
      .join("/");

    pageLang =
      context.query.slug.find((el) => ["en", "ru"].includes(el)) || context.req?.headers['accept-language']?.split(';')[0].split(',')[0].substr(0,2) || 'en';

    var pageData = require(`Mocks/pages/${pageSlug}`).default;
  } catch (e) {
    var pageData = {
      slug: "404",
      page: [],
      pageLang,
    };
  }

  return {
    props: {
      slug: context.query.slug,
      page: pageData(pageLang),
      pageLang,
    },
  };
}
