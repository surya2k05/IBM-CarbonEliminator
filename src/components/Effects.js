import React from 'react';
import { Box, Heading, Text, Image } from "@chakra-ui/react";
const countryWiseEmissions = require("../images/Co2.gif");
const dailyEmissions = require("../images/co2-3.png");
const increment = require("../images/increment.png");

const Effects = () => {
  return (
    <>
      <Box
        px={20}
        py={10}
        fontSize="large"
        backgroundColor="green.700"
        color="white"
      >
        {/* Welcome Section */}
        <Box textAlign="center" mb={8}>
          <Heading as="h2" mb={2}>
            Effects of Carbon footprint
          </Heading>
        </Box>

        <ol>
          <li style={{ fontWeight: 'bold', fontSize: 'larger' }}>
            Effect On the Environment
          </li>
          <p>
            The most critical effect of carbon footprint is that it is adversely affecting the environment that we live in. As a result of an increased proportion of carbon dioxide in the atmosphere, a rise in temperatures, prolonged showers, tropical storms, wildfires, and other unusual climate changes are happening. Global warming causes the melting of ice and rise in sea levels that are destroying coastal habitats. All these changes in climatic conditions are affecting the growing patterns of plants and vegetation which eventually is destroying the ecosystem.
          </p>

          <li style={{ fontWeight: 'bold', fontSize: 'larger' }}>
            Affecting Wildlife
          </li>
          <p>
            The inconsistent weather patterns resulting from increasing pollution and global warming are posing danger in the lives of various wildlife species driving them close to extinction. The interdependence between plants and animals is getting disturbed and thereby causes starvation, displacement, and extinction. The absence of natural habitats and increased pollution levels are affecting biodiversity patterns on earth which is a threat to the existence of living creatures on this planet.
          </p>

          <li style={{ fontWeight: 'bold', fontSize: 'larger' }}>
            Impact On Human Health
          </li>
          <p>
            Climate change, drought, and floods affect the natural growth of food crops which in turn can result in poor crop production, increased malnutrition, and health issues. Moreover, people are getting affected by various diseases due to excess pollution of air, soil, and water. The compromised air quality index in urban areas has led to an increase in respiratory-related problems like asthma, bronchitis, and allergies.
          </p>

          <li style={{ fontWeight: 'bold', fontSize: 'larger' }}>
            Retards Economic Growth
          </li>
          <p>
            The reduction in carbon footprint has become extremely important because it contributes to slow economic growth in the country. Several studies have revealed that climate change and pollution affect the agricultural and natural resources of a country. As a result, countries dependent majorly on agriculture and cultivation face slow progress in economic growth and lower revenue earnings.
          </p>
        </ol>
      </Box>

      <Box backgroundColor="white" color="green.700" py={4} textAlign="center" fontWeight="bold">
      © 2024 IBM  Sustainable Development Goals(SDGs).
      </Box>
    </>
  );
};

export default Effects;
