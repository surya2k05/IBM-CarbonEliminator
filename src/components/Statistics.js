import React from 'react'
import { Box, Heading, Text, Image } from "@chakra-ui/react";
const countryWiseEmissions = require("../images/Co2.gif")
const reducedEmissions = require("../images/word.webp")
const dailyEmissions = require("../images/co2-3.png")
const increment = require("../images/increment.png")

const Statistics = () => {
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
      <Box  mb={8}>
        <Heading textAlign="center" as="h1" mb={2}>
          Some Alarming Statistics
        </Heading>
        <br/>
        <p style={{fontSize:"25px"}}>Some of the worldwide stats are listed below:</p>
        <br/>
        <ul style={{ listStyle: 'bullet', padding: 0 }}>
          <li>
            The global average carbon footprint is about 4 tons per person with the highest in the United States (16 tons).
          </li>
          <li>
            One-fourth of the earth’s species are likely to face extinction within the next 40 years if climate change continues to increase at the current rate.
          </li>
          <li>
            Reduction in greenhouse gas emissions can help prevent up to 3 million premature deaths yearly by the year 2100.
          </li>
          <li>
            If each of the 140 million homes in a city replaces its incandescent light bulb with an energy-efficient CFL lamp, it can save enough energy to power over 3 million homes in a year.
          </li>
        </ul>
      </Box>

      {/* What is Ecosavvy Section */}
      <Box mb={8} display={{ md: "flex" }} gap="10">
        <Box flex={{ base: 1, md: 1 }} mb={{ base: 6, md: 0 }}>
          <Heading as="h2" size="lg" mb={2} textAlign="center">
           How Carbon Emissions have increased in past 50 years
          </Heading>
          <Text>
            This is a graph showing how carbon emission have rapidly increasing
            in past years. The graph has been exponentially growing since the year 1960.
            Slight Downfall of the graph can be noticed in the year 2020.
            <br />
            The exponential growth of carbon emissions underscores the grave risks to humanity posed by these harmful emissions, including severe climate change, extreme weather events, and adverse health effects. Immediate action and sustainable practices are crucial to mitigate these risks and ensure a healthier planet for future generations.
            <br />
            This includes transitioning to renewable energy sources, enhancing energy efficiency, adopting sustainable agricultural practices, and promoting global cooperation on environmental policies.

           
          </Text>
        </Box>
        <Box flex={{ base: 1, md: 1 }}>
          <Image
            src={increment}
            alt="Increment"
            maxW="100%"
            borderRadius={5}
          />
        </Box>
      </Box>
<br/>
      {/* Why Choose Ecosavvy Section */}
      <Box mb={8} display={{ md: "flex" }}>
        <Box flex={{ base: 1, md: 1 }} order={{ base: 2, md: 1 }}>
          <Image
            src={countryWiseEmissions}
            alt="countryWiseEmissions"
            maxW="100%"
            borderRadius={10}
          />
        </Box>
        <Box
          flex={{ base: 1, md: 1 }}
          order={{ base: 1, md: 2 }}
          ml={{ md: 4 }}
        >
          <Heading as="h2" size="lg" mb={2} textAlign="center">
           Country Wise Emission Statistics
          </Heading>
          <Text>
            We can see the country wise Emission stats in the graph alongside.
            It shows how Saudi Arabia  and Canada are one of the highest carbon emitters
            while countries with less area and population like Japan also fall under
            one of the worldwide highest emission's category.
            <br/>
            This is the statistics after the COVID had just gone over us. We, humans, as a
            responsible community should have taken some major steps after the COVID tragedy but 
            unfortunately we failed.
          </Text>
        </Box>
      </Box>

      <Box mb={8} display={{ md: "flex" }} gap="10">
        <Box flex={{ base: 1, md: 1 }} mb={{ base: 6, md: 0 }}>
          <Heading as="h2" size="lg" mb={2} textAlign="center">
            Co2 Emissions in 2023
          </Heading>
          <Text>
          This graph illustrates the changes in carbon emissions up to 2023. A notable reduction in emissions occurred in 2020 due to the COVID-19 pandemic and the resulting global lockdowns.

            <br />
            The graph highlights the significant role of human activities in carbon emissions. Countries like Spain, India, and the USA experienced considerable declines in emissions during the lockdown, while China saw less reduction despite its large population. India, with its vast population and area, performed well in reducing emissions during this period.
            <br />
            As of 2023, emissions have rebounded in many regions as economic activities resumed. This emphasizes the need for sustainable practices and policies to maintain lower emissions and combat climate change effectively.
          </Text>
        </Box>
        <Box flex={{ base: 1, md: 1 }}>
          <Image
            src={reducedEmissions}
            alt="Increment"
            maxW="100%"
            borderRadius={5}
          />
        </Box>
      </Box>

      <Box mb={8} display={{ md: "flex" }}>
        <Box flex={{ base: 1, md: 1 }} order={{ base: 2, md: 1 }}>
          <Image
            src={dailyEmissions}
            alt="increment"
            maxW="100%"
            borderRadius={10}
          />
        </Box>
        <Box
          flex={{ base: 1, md: 1 }}
          order={{ base: 1, md: 2 }}
          ml={{ md: 4 }}
        >
          <Heading as="h2" size="lg" mb={2} textAlign="center">
           Daily Emission Analysis
          </Heading>
          <Text>
          The graph shows a detailed daily emission analysis from the year 1970 to the projected year 2050. This comprehensive view underscores the trends and fluctuations in emissions over time, emphasizing both historical patterns and future projections.
         <br/>
         As of 2023, emissions have rebounded in many regions as economic activities resumed. This emphasizes the need for sustainable practices and policies to maintain lower emissions and combat climate change effectively.
          </Text>
        </Box>
      </Box>
    </Box>
    <Box backgroundColor="white" color="green.700" py={4} textAlign="center" fontWeight="bold">
    © 2024 IBM Sustainable Development Goals(SDGs).
      </Box>
      </>
  )
}

export default Statistics