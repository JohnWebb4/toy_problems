package zigZagConversion;

import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class ZigZagConverterTest {
	@Test
	public void convertZigZag_1() {
		assertEquals("PAYPALISHIRING", ZigZagConverter.convertZigZag("PAYPALISHIRING", 1));
	}

	@Test
	public void convertZigZag_2() {
		assertEquals("PYAIHRNAPLSIIG", ZigZagConverter.convertZigZag("PAYPALISHIRING", 2));
	}

	@Test
	public void convertZigZag_3() {
		assertEquals("PAHNAPLSIIGYIR", ZigZagConverter.convertZigZag("PAYPALISHIRING", 3));
	}

	@Test
	public void convertZigZag_4() {
		assertEquals("PINALSIGYAHRPI", ZigZagConverter.convertZigZag("PAYPALISHIRING", 4));
	}
}