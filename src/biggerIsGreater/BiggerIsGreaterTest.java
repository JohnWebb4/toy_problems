package biggerIsGreater;

import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class BiggerIsGreaterTest {
	@Test
	public void testNextLargestWord_abcd() {
		assertEquals("abdc", BiggerIsGreater.biggerIsGreater("abcd"));
	}

	@Test
	public void testNextLargestWord_set0() {
		assertEquals("ba", BiggerIsGreater.biggerIsGreater("ab"));
		assertEquals("no answer", BiggerIsGreater.biggerIsGreater("bb"));
		assertEquals("hegf", BiggerIsGreater.biggerIsGreater("hefg"));
		assertEquals("dhkc", BiggerIsGreater.biggerIsGreater("dhck"));
		assertEquals("hcdk", BiggerIsGreater.biggerIsGreater("dkhc"));
	}

	@Test
	public void testNextLargestWord_set1() {
		assertEquals("lmon", BiggerIsGreater.biggerIsGreater("lmno"));
		assertEquals("no answer", BiggerIsGreater.biggerIsGreater("dcba"));
		assertEquals("no answer", BiggerIsGreater.biggerIsGreater("dcbb"));
		assertEquals("acbd", BiggerIsGreater.biggerIsGreater("abdc"));
		assertEquals("abdc", BiggerIsGreater.biggerIsGreater("abcd"));
		assertEquals("fedcbabdc", BiggerIsGreater.biggerIsGreater("fedcbabcd"));
	}
}