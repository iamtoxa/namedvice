import NavBar from "Components/NavBar/NavBar";

export default function Page({ page }) {
  return (
    <div>
      <main>
        <NavBar {...page.NavBar}/>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  try{
    console.log(`Mocks/${context.query.slug.join('/')}`)
    var pageData = require(`Mocks/${context.query.slug.join('/')}`).default;
  } catch (e){
    var pageData = {
      slug: '404',
      page: []
    };
  }
  return {
    props: {
      slug: context.query.slug,
      page: pageData
    },
  }
}