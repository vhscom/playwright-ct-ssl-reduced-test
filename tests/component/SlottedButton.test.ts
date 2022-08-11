import { test, expect } from '@playwright/experimental-ct-svelte';
import SlottedButton from '$lib/SlottedButton.svelte';
// import {purchasableOffsets} from '../__mocks__/marketplace-mock-data.js';

// import type {Offset} from '$types';

// const availableOffsets: Offset[] = purchasableOffsets.offsets
//   .filter(os => os.list_state === 'LISTED')
//   .map(os => os.offset);

test.describe('SlottedButton', () => {
	test('can show total', async ({ mount }) => {
		const component = await mount(SlottedButton, {
			slots: {
				toolbar: '<div>Toolbar</div>'
			},
			props: {
				title: 'Test table',
				items: [],
				selectedItems: [],
				shouldShowTotal: true
			}
		});

		await expect(component).toContainText('Total');
	});

	test('can hide total', async ({ mount }) => {
		const component = await mount(SlottedButton, {
			slots: {
				toolbar: '<div>Toolbar</div>'
			},
			props: {
				title: 'Test table',
				items: [],
				selectedItems: [],
				shouldShowTotal: false
			}
		});

		await expect(component).not.toContainText('Total');
	});
});
