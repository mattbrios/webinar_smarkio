import React from 'react';
import { Container } from '@material-ui/core';
import styled from 'styled-components';
import Header from '../../components/Header';
import { Typography } from '@material-ui/core';
import Footer from '../../components/Footer';

const PolicyContainer = styled.div`
  padding: 6rem 0;
  min-height: 100vh;

  & p, h2 {
    margin-bottom: 1rem;
  }
`;

const Privacy = () => {
  return (
    <>
      <Header />
      <PolicyContainer>
        <Container>
          <Typography component="h2" variant="h4" className="blue-text bold-text" gutterBottom>
            Política de Privacidade
          </Typography>
          <Typography component="p" variant="body1" className="paragraph" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ornare mattis ex, non rutrum nisi. Curabitur quis enim arcu. Fusce pulvinar ante a ullamcorper condimentum. Mauris facilisis mattis lorem in dictum. Nunc feugiat sapien interdum, rhoncus eros eget, gravida ex. Donec in est vel diam rutrum vehicula. Maecenas rutrum sollicitudin efficitur. Duis orci felis, gravida ac ultricies et, maximus vitae felis. Suspendisse purus turpis, tincidunt non neque sed, convallis porta eros.
          </Typography>
          <Typography component="p" variant="body1" className="paragraph" gutterBottom>
            In lobortis molestie ipsum ut laoreet. Nunc tempus risus quis lorem porta, eu elementum arcu tempus. Pellentesque purus nisl, pulvinar quis pulvinar quis, eleifend sed ante. Curabitur ut ante et augue egestas sollicitudin. Nunc cursus maximus odio at finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel condimentum arcu. Nulla volutpat quam ex, in ornare arcu molestie in. Donec ut ultrices nibh. Nam odio dui, scelerisque vel lacus sit amet, vulputate ultrices quam. Mauris in orci felis. Proin ac sapien pulvinar, placerat lacus sit amet, fermentum justo. Nulla lobortis aliquet ullamcorper. Nullam ante metus, tincidunt vitae consectetur gravida, maximus eu orci. Fusce vehicula mauris sodales nunc consectetur consectetur. Nunc turpis purus, fermentum vitae sodales vitae, tincidunt vel justo.
          </Typography>
          <Typography component="p" variant="body1" className="paragraph" gutterBottom>
            Phasellus pulvinar ante arcu, mattis dictum mauris facilisis a. Sed enim nisl, pellentesque a iaculis et, commodo et risus. Mauris blandit sit amet nisl sed lobortis. Vivamus arcu elit, tempus in posuere accumsan, condimentum id sem. In hac habitasse platea dictumst. Quisque porttitor quam vel ornare faucibus. Nunc vulputate semper nunc, eget aliquam lacus. Nunc maximus congue orci sit amet finibus. Aenean viverra odio in lacus semper, fermentum malesuada ipsum tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec eget tempus ante.
          </Typography>
          <Typography component="p" variant="body1" className="paragraph" gutterBottom>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam et lobortis elit. Proin blandit dolor id magna tincidunt porta. Vivamus vel quam in enim tempor scelerisque. Suspendisse consectetur mi eu leo venenatis interdum. In ante est, lacinia accumsan pulvinar ut, interdum vel dui. Donec dapibus pulvinar est nec ullamcorper. Ut mollis pretium dolor, quis venenatis risus venenatis non. Integer mollis quis dui ut imperdiet. Donec vitae quam nisi. Duis quam diam, interdum ac commodo ac, pharetra ut nibh. Proin in quam eu nisi sodales commodo. Donec hendrerit in risus et laoreet.
          </Typography>
        </Container>
      </PolicyContainer>
      <Footer />
    </>
  );
};

export default Privacy;
