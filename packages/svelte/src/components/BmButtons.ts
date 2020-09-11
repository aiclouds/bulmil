/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@bulmil/core';


interface BmButtonsProps {
  
  /** Buttons size */
  size?: Components.BmButtons["size"]
}

interface BmButtonsEvents {
  
}

interface BmButtonsSlots {
  default: any
}
  
/* generated by Svelte v3.25.0 */
import {
	SvelteComponent,
	binding_callbacks,
	create_slot,
	detach,
	element,
	flush,
	init,
	insert,
	safe_not_equal,
	set_custom_element_data,
	transition_in,
	transition_out,
	update_slot
} from "svelte/internal";

import { createEventDispatcher, onMount } from "svelte";

function create_fragment(ctx) {
	let bm_buttons;
	let current;
	const default_slot_template = /*#slots*/ ctx[4].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[3], null);

	return {
		c() {
			bm_buttons = element("bm-buttons");
			if (default_slot) default_slot.c();
			set_custom_element_data(bm_buttons, "size", /*size*/ ctx[0]);
		},
		m(target, anchor) {
			insert(target, bm_buttons, anchor);

			if (default_slot) {
				default_slot.m(bm_buttons, null);
			}

			/*bm_buttons_binding*/ ctx[5](bm_buttons);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 8) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[3], dirty, null, null);
				}
			}

			if (!current || dirty & /*size*/ 1) {
				set_custom_element_data(bm_buttons, "size", /*size*/ ctx[0]);
			}
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(bm_buttons);
			if (default_slot) default_slot.d(detaching);
			/*bm_buttons_binding*/ ctx[5](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { size = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(1, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function bm_buttons_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(1, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("size" in $$props) $$invalidate(0, size = $$props.size);
		if ("$$scope" in $$props) $$invalidate(3, $$scope = $$props.$$scope);
	};

	return [size, __ref, getWebComponent, $$scope, slots, bm_buttons_binding];
}

class BmButtons extends SvelteComponent {
  $$prop_def: BmButtonsProps;
  $$events_def: BmButtonsEvents;
  $$slot_def: BmButtonsSlots;

  $on<K extends keyof BmButtonsEvents>(type: K, callback: (e: BmButtonsEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<BmButtonsProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { size: 0, getWebComponent: 2 });
	}

	get size() {
		return this.$$.ctx[0];
	}

	set size(size) {
		this.$set({ size });
		flush();
	}

	get getWebComponent(): HTMLBmButtonsElement | undefined {
		return this.$$.ctx[2];
	}
}

export default BmButtons;