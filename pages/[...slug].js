import NavBar from "Components/NavBar/NavBar";
import Brand from "Components/Brand/Brand";
import Background from "Components/Background/Background";
import DynBlock from "../components/DyncmicBlock/DynamicBlock";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { useRouter } from "next/router";

export default function Page({ page }) {
  const router = useRouter();

  return (
    <div>
      <main className="page">
        <Brand />
        <NavBar />
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
              <>{page.content?.map((page_item, index) => {
                return (
                  <>
                    <DynBlock key={index} {...page_item} />
                  </>
                );
              })}
              </>
            </CSSTransition>
          </SwitchTransition>
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    var pageData = require(`Mocks/pages/${context.query.slug.join("/")}`)
      .default;
  } catch (e) {
    var pageData = {
      slug: "404",
      page: [],
    };
  }
  return {
    props: {
      slug: context.query.slug,
      page: pageData,
    },
  };
}
