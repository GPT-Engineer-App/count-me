import { useState, useRef } from "react";
import { Container, Text, VStack, Button, HStack } from "@chakra-ui/react";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    if (isRunning) {
      clearInterval(timerRef.current);
      setIsRunning(false);
    }
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setTime(0);
    setIsRunning(false);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="4xl" fontWeight="bold">Timer App</Text>
        <Text fontSize="2xl">{time} seconds</Text>
        <HStack spacing={4}>
          <Button colorScheme="teal" onClick={startTimer} disabled={isRunning}>Start</Button>
          <Button colorScheme="teal" onClick={stopTimer} disabled={!isRunning}>Stop</Button>
          <Button colorScheme="red" onClick={resetTimer}>Reset</Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Timer;