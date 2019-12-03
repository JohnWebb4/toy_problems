package diwaliLights;

import org.junit.Test;

import static org.junit.Assert.*;

public class DiwaliLightsTest {
    @Test
    public void shouldReturn1For1LightsTest() {
        assertEquals(1, DiwaliLights.calculateLights(1));
    }

    @Test
    public void shouldReturn3For2LightsTest() {
        assertEquals(3, DiwaliLights.calculateLights(2));
    }

    @Test
    public void shouldReturn7For3LightsTest() {
        assertEquals(7, DiwaliLights.calculateLights(3));
    }

    @Test
    public void shouldReturn14For4LightsTest() {
        assertEquals(15, DiwaliLights.calculateLights(4));
    }
}