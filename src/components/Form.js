import React, { useState } from "react";
import {
  Button,
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Slider,
  SliderTrack,
  SliderThumb,
  SliderFilledTrack,
  Stack,
  Text,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { Bar, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const EMISSION_FACTORS = {
  "India": {
    "Transportation": 0.14,  // kgCO2/km
    "Electricity": 0.82,  // kgCO2/kWh
    "Diet": 1.25,  // kgCO2/meal
    "Waste": 0.1  // kgCO2/kg
  }
};

const maxFootprint = 50; // Set this to 50 tonnes for your case

const calculatePercentages = (totalEmissions) => {
  const totalEmissionsPercentage = Math.min((totalEmissions * 100) / maxFootprint, 100);
  const remainingFootprintPercentage = Math.max(100 - totalEmissionsPercentage, 0);

  return [totalEmissionsPercentage, remainingFootprintPercentage];
};

function CarbonFootprintCalculator() {
  const [country, setCountry] = useState("India");
  const [distance, setDistance] = useState(0);
  const [electricity, setElectricity] = useState(0);
  const [waste, setWaste] = useState(0);
  const [meals, setMeals] = useState(0);
  const [results, setResults] = useState(null);
  const toast = useToast();

  const calculateEmissions = () => {
    const yearlyDistance = distance * 365;
    const yearlyElectricity = electricity * 12;
    const yearlyMeals = meals * 365;
    const yearlyWaste = waste * 52;

    const transportationEmissions = EMISSION_FACTORS[country]["Transportation"] * yearlyDistance;
    const electricityEmissions = EMISSION_FACTORS[country]["Electricity"] * yearlyElectricity;
    const dietEmissions = EMISSION_FACTORS[country]["Diet"] * yearlyMeals;
    const wasteEmissions = EMISSION_FACTORS[country]["Waste"] * yearlyWaste;

    const totalEmissions = transportationEmissions + electricityEmissions + dietEmissions + wasteEmissions;

    setResults({
      transportationEmissions: (transportationEmissions / 1000).toFixed(2),
      electricityEmissions: (electricityEmissions / 1000).toFixed(2),
      dietEmissions: (dietEmissions / 1000).toFixed(2),
      wasteEmissions: (wasteEmissions / 1000).toFixed(2),
      totalEmissions: (totalEmissions / 1000).toFixed(2),
      totalEmissionsPercentage: calculatePercentages(totalEmissions / 1000)[0] // Percentage of total emissions out of max footprint
    });

    toast({
      title: "Calculation Complete",
      description: "Your carbon footprint has been calculated.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const barChartData = {
    labels: ['Transportation', 'Electricity', 'Diet', 'Waste'],
    datasets: [
      {
        label: 'Carbon Emissions (tonnes CO2 per year)',
        data: results ? [
          results.transportationEmissions,
          results.electricityEmissions,
          results.dietEmissions,
          results.wasteEmissions
        ] : [],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const doughnutChartData = {
    labels: ['Your Carbon Footprint', 'Remaining Carbon Footprint'],
    datasets: [
      {
        label: 'Total Carbon Footprint',
        data: results ? calculatePercentages(results.totalEmissions) : [0, 100],
        backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(201, 203, 207, 0.6)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(201, 203, 207, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Box flex="1" p={5}>
        <Text fontSize="2xl" mb={4}><strong>Carbon Footprint Calculator ⚠️</strong></Text>
        <FormControl mb={4}>
          <FormLabel>🌍 Your Country</FormLabel>
          <Select value={country} onChange={e => setCountry(e.target.value)}>
            <option value="India">India</option>
          </Select>
        </FormControl>

        <Flex direction={{ base: "column", md: "row" }} mb={4}>
          <Box flex={1} mr={{ md: 4 }}>
            <FormControl mb={4}>
              <FormLabel>🚗 Daily commute distance (in km)</FormLabel>
              <Slider
                defaultValue={0}
                min={0}
                max={100}
                step={0.1}
                value={distance}
                onChange={val => setDistance(val)}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
              <Input value={distance} onChange={e => setDistance(parseFloat(e.target.value))} />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>💡 Monthly electricity consumption (in kWh)</FormLabel>
              <Slider
                defaultValue={0}
                min={0}
                max={1000}
                step={1}
                value={electricity}
                onChange={val => setElectricity(val)}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
              <Input value={electricity} onChange={e => setElectricity(parseFloat(e.target.value))} />
            </FormControl>
          </Box>

          <Box flex={1} ml={{ md: 4 }}>
            <FormControl mb={4}>
              <FormLabel>🍽️ Waste generated per week (in kg)</FormLabel>
              <Slider
                defaultValue={0}
                min={0}
                max={100}
                step={0.1}
                value={waste}
                onChange={val => setWaste(val)}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
              <Input value={waste} onChange={e => setWaste(parseFloat(e.target.value))} />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>🍽️ Number of meals per day</FormLabel>
              <Slider
                defaultValue={0}
                min={0}
                max={50}
                step={1}
                value={meals}
                onChange={val => setMeals(val)}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
              <Input value={meals} onChange={e => setMeals(parseFloat(e.target.value))} />
            </FormControl>
          </Box>
        </Flex>

        <Button colorScheme="blue" onClick={calculateEmissions}>Calculate CO2 Emissions</Button>

        {results && (
          <Box mt={6}>
            <Text fontSize="xl" mb={4}><strong>Results</strong></Text>
            <Flex direction={{ base: "column", md: "row" }}>
              <Box flex={1} mr={{ md: 4 }}>
                <Text fontSize="lg" mb={2}><strong>Carbon Emissions by Category</strong></Text>
                <Text>🚗 Transportation: {results.transportationEmissions} tonnes CO2 per year</Text>
                <Text>💡 Electricity: {results.electricityEmissions} tonnes CO2 per year</Text>
                <Text>🍽️ Diet: {results.dietEmissions} tonnes CO2 per year</Text>
                <Text>🗑️ Waste: {results.wasteEmissions} tonnes CO2 per year</Text>

                <Box mt={6}>
                  <Text fontSize="lg" mb={2}><strong>Carbon Emissions Chart</strong></Text>
                  <Box height="370px" width={{ base: '70%', md: '70%' }} mx="auto">
                    <Bar data={barChartData} options={{ maintainAspectRatio: false }} />
                  </Box>
                </Box>
              </Box>

              <Box flex={1} ml={{ md: 4 }}>
                <Text fontSize="lg" mb={2}><strong>Total Carbon Footprint</strong></Text>
                <Text>🌍 Your total carbon footprint is: {results.totalEmissions} tonnes CO2.</Text>

                <Box mt={20}>
                  <Text fontSize="lg" mb={2}><strong>Total Carbon Footprint Chart</strong></Text>
                  <Box height="300px" width={{ base: '70%', md: '70%' }} mx="auto">
                    <Doughnut data={doughnutChartData} options={{ maintainAspectRatio: false }} />
                  </Box>
                </Box>
              </Box>
            </Flex>
          </Box>
        )}
      </Box>
      <Box 
        py={4} 
        backgroundColor="green.200" 
        color="green.900" 
        fontWeight="bold"
        textAlign="center"
      >
        <Text fontSize="sm">© 2024 IBM Sustainable Development Goals(SDGs).</Text>
      </Box>
    </Box>
  );
}

export default CarbonFootprintCalculator;
