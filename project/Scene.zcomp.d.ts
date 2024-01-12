import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip } from "@zcomponent/core";

import { GLTF as GLTF_0 } from "@zcomponent/three/lib/components/models/GLTF";
import { Button as Button_1 } from "@zcomponent/html/lib/button";
import { SetLayerOff as SetLayerOff_2 } from "@zcomponent/core/lib/behaviors/SetLayerOff";
import { CSS as CSS_3 } from "@zcomponent/html/lib/CSS";
import { Div as Div_4 } from "@zcomponent/html/lib/div";
import { DefaultCookieConsent as DefaultCookieConsent_5 } from "@zcomponent/core/lib/components/DefaultCookieConsent";
import { DefaultLoader as DefaultLoader_6 } from "@zcomponent/core/lib/components/DefaultLoader";
import { Group as Group_7 } from "@zcomponent/three/lib/components/Group";
import { DirectionalLight as DirectionalLight_8 } from "@zcomponent/three/lib/components/lights/DirectionalLight";
import { HTML as HTML_9 } from "@zcomponent/three/lib/components/HTML";
import { H1 as H1_10 } from "@zcomponent/html/lib/headings";
import { Img as Img_11 } from "@zcomponent/html/lib/img";
import { Span as Span_12 } from "@zcomponent/html/lib/span";
import { PerspectiveCamera as PerspectiveCamera_13 } from "@zcomponent/three/lib/components/cameras/PerspectiveCamera";
import { MouseOrbit as MouseOrbit_14 } from "@zcomponent/three/lib/behaviors/MouseOrbit";
import { ShadowPlane as ShadowPlane_15 } from "@zcomponent/three/lib/components/meshes/ShadowPlane";
import { SkyEnvironment as SkyEnvironment_16 } from "@zcomponent/three/lib/components/environments/SkyEnvironment";

interface ConstructorProps {

}

/**
* @zcomponent
* @zicon zcomponent
*/
declare class Comp extends ZComponent {

	constructor(contextManager: ContextManager, constructorProps: ConstructorProps);

	nodes: {
		Blob_glb: GLTF_0 & {
			behaviors: {

			}
		},
		Button: Button_1 & {
			behaviors: {
				0: SetLayerOff_2,
				SetLayerOff: SetLayerOff_2,
			}
		},
		CSS: CSS_3 & {
			behaviors: {

			}
		},
		Card: Div_4 & {
			behaviors: {

			}
		},
		Card_Footer: Div_4 & {
			behaviors: {

			}
		},
		Card_Header: Div_4 & {
			behaviors: {

			}
		},
		DefaultCookieConsent: DefaultCookieConsent_5 & {
			behaviors: {

			}
		},
		DefaultLoader: DefaultLoader_6 & {
			behaviors: {

			}
		},
		Defaults: Group_7 & {
			behaviors: {

			}
		},
		DirectionalLight: DirectionalLight_8 & {
			behaviors: {

			}
		},
		HTML: HTML_9 & {
			behaviors: {

			}
		},
		Heading: H1_10 & {
			behaviors: {

			}
		},
		Logo_Image: Img_11 & {
			behaviors: {

			}
		},
		Paragraph: Span_12 & {
			behaviors: {

			}
		},
		PerspectiveCamera: PerspectiveCamera_13 & {
			behaviors: {
				0: MouseOrbit_14,
				MouseOrbit: MouseOrbit_14,
			}
		},
		ShadowPlane: ShadowPlane_15 & {
			behaviors: {

			}
		},
		Shape_Image: Img_11 & {
			behaviors: {

			}
		},
		SkyEnvironment: SkyEnvironment_16 & {
			behaviors: {

			}
		},
	};

	animation: Animation & { layers: {
		UI: Layer & { clips: {
			On0: LayerClip;
		}};
	}};

	/**
	 * The position, in 3D space, of this node relative to its parent. The three elements of the array correspond to the `x`, `y`, and `z` components of position.
	 * 
	 * @zprop
	 * @zdefault [0,0,0]
	 * @zgroup Transform
	 * @zgrouppriority 10
	 */
	public position: Observable<[x: number, y: number, z: number]>;

	/**
	 * The rotation, in three dimensions, of this node relative to its parent. The three elements of the array correspond to Euler angles - yaw, pitch and roll.
	 * 
	 * @zprop
	 * @zdefault [0,0,0]
	 * @zgroup Transform
	 * @zgrouppriority 10
	 */
	public rotation: Observable<[x: number, y: number, z: number]>;

	/**
	 * The scale, in three dimensions, of this node relative to its parent. The three elements of the array correspond to scales in the the `x`, `y`, and `z` axis.
	 * 
	 * @zprop
	 * @zdefault [1,1,1]
	 * @zgroup Transform
	 * @zgrouppriority 10
	 */
	public scale: Observable<[x: number, y: number, z: number]>;

	/**
	 * Determines if this object and its children are rendered to the screen.
	 * 
	 * @zprop
	 * @zdefault true
	 * @zgroup Appearance
	 * @zgrouppriority 11
	 */
	public visible: Observable<boolean>;
}

export default Comp;
