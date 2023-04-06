import Layout from "@/components/layout/Layout";
import Image from "next/image";

const AboutUs = () => {
  return (
    <Layout
      title={"About Us"}
      description={"About us, GuitarLA, online website for selling music"}
    >
      <main className="contenedor">
        <h2 className="heading">About us</h2>
        <div>
          <Image alt="about us img" src="/img/nosotros.jpg" width={1000} height={800}/>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              nec quam pretium, feugiat odio sed, viverra lorem. Nunc mauris ex,
              mattis vitae sodales nec, ultricies vel ex. Curabitur sed aliquam
              orci. Pellentesque eget venenatis purus. Phasellus fermentum neque
              diam, sagittis elementum est pellentesque vitae. Donec dignissim
              felis turpis, non mattis augue ultricies eu. Vestibulum vestibulum
              porttitor est vitae vestibulum. Phasellus bibendum sed elit vel
              semper. Etiam pretium facilisis erat, volutpat posuere sem iaculis
              id. Aliquam ligula tortor, scelerisque a pulvinar scelerisque,
              gravida eget libero. Aliquam dapibus in erat at sagittis. Nulla id
              nisi quis est congue vehicula nec vel risus. Quisque consectetur
              ut arcu eu dictum. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Vivamus ornare, eros
              ac faucibus efficitur, erat nulla faucibus risus, non pulvinar
              risus nisl sed nunc.
            </p>
            <p>
              Integer sagittis, eros eget hendrerit ultricies, justo ligula
              luctus justo, sagittis pretium sem elit a ligula. Curabitur tempus
              tincidunt massa, eu accumsan sem euismod vitae. Donec aliquam odio
              eros, ut vehicula nisl dignissim nec. Ut iaculis velit libero,
              vitae tincidunt tellus efficitur consectetur. Fusce aliquam dolor
              at tincidunt accumsan. Nulla tempor nulla ligula. Proin ornare
              lacinia lorem, ac rhoncus neque pellentesque a. Curabitur eleifend
              odio vel sapien vehicula aliquet. Orci varius natoque penatibus et
              magnis dis parturient montes, nascetur ridiculus mus. Praesent
              elementum nunc libero, vel porttitor quam semper ut. Nullam
              interdum nulla eget eros dapibus efficitur. Integer congue est
              orci, ut varius felis finibus sit amet. Donec nec enim in urna
              facilisis sollicitudin.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default AboutUs;
