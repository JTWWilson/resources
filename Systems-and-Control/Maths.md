Maths for Systems & Control
-----------------------------------------

## Ohm's Law

![V = IR](https://github.com/stanley-godfrey/Odds-And-Sods/raw/master/vir.png)

 - **V**: voltage, Volts (V)
 - **I**: current, Amps (A)
 - **R**: resistance, Ohms (Ω)

### Example

*An LED can take a maximum of 3V and has a safe current of up to 20mA. If the circuit was powered by a 6V battery, what size resistor would be needed to protect it?*

As we have 6V in a circuit but an LED can only take 3V, we need to remove **3V** from the circuit to prevent circuit failure. So:
![Solution](https://github.com/stanley-godfrey/Odds-And-Sods/raw/master/resistance_solution.png)

So we would need a 150Ω resistor to prevent the LED from failing.

## Electrical Power

![P = VI](https://github.com/stanley-godfrey/Odds-And-Sods/raw/master/pvi.png)

- **P**: power, Watts (W)
- **V**: voltage, Volts (V)
- **I**: current, Amps (A)

### Example

*For the example above, would a 0.25W resistor be adequate?*
The resistor would have to dissipate:
![Solution](https://github.com/stanley-godfrey/Odds-And-Sods/raw/master/power_solution.png)

As a 0.25W resistor can dissipate up to 0.25W, this would be adequate for the LED.

## Resistors in Series and Parallel

### Resistors in Series

![Series Resistors](https://github.com/stanley-godfrey/Odds-And-Sods/raw/master/series_resistors.png)

- R<sub>t</sub>: total resistance, Ohms (Ω)
- R<sub>1</sub>: resistor 1, Ohms (Ω)
- R<sub>2</sub>: resistor 2, Ohms (Ω)

### Resistors in Parallel

![Parallel Resistors](https://github.com/stanley-godfrey/Odds-And-Sods/raw/master/parallel_resistance.png)

- R<sub>t</sub>: total resistance, Ohms (Ω)
- R<sub>1</sub>: resistor 1, Ohms (Ω)
- R<sub>2</sub>: resistor 2, Ohms (Ω)

## Potential Divider

For this circuit:

![Potential Divider](https://www.bournetoinvent.com/projects/gcse_theory/img/pot_div.png)

![V1](https://github.com/stanley-godfrey/Odds-And-Sods/raw/master/pot_div_1.png)

![V2](https://github.com/stanley-godfrey/Odds-And-Sods/raw/master/pot_div_2.png)

### Example

*A 9V battery supplies a potential divider. If two 1kΩ resistors are used, what is the voltage at V<sub>1</sub>?*

![Example solution](https://github.com/fabcooldog/resources/raw/master/Systems-and-Control/Images/pot_div_example.png)


