
import React from 'react';
import { View } from 'react-native'
import {
  Svg,
  Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Text,
  Use,
  Defs,
  Stop
} from 'react-native-svg';

export default class Onboarding00 extends React.PureComponent {
  render() {
    return(
      <Svg height={this.props.height} width={this.props.width} viewBox="0 0 360 380">
        <G fill="none" transform="matrix(2.5426 0 0 2.5848 45.9 -.0015682)">
          <G id="logo_start">
            <G id="Group">
              <Path id="Shape" d="m11.072 144.36c-0.17164 0.52086-0.44759 1.0013-0.811 1.412-0.362 0.40205-0.8111 0.71605-1.313 0.918-0.522 0.217-1.113 0.324-1.773 0.324-0.57125 6e-3 -1.1378-0.10399-1.665-0.324-0.4961-0.20562-0.94596-0.50859-1.323-0.891-0.372-0.377-0.663-0.818-0.873-1.322s-0.314-1.051-0.314-1.639h1.512c0 0.361 0.06 0.705 0.18 1.035s0.294 0.619 0.522 0.865 0.507 0.439 0.837 0.584 0.705 0.217 1.125 0.217c0.9 0 1.568-0.271 2.007-0.811 0.438-0.541 0.657-1.26 0.657-2.16v-8.262h1.512v8.262c0.0046 0.60858-0.09002 1.2138-0.28 1.792zm11.51-9.863c0.756 0.33 1.412 0.785 1.971 1.367 0.558 0.582 0.996 1.27 1.313 2.061 0.318 0.793 0.478 1.65 0.478 2.574 0.01285 1.7173-0.6348 3.3738-1.809 4.627-0.558 0.588-1.215 1.049-1.971 1.385s-1.56 0.504-2.412 0.504-1.656-0.168-2.412-0.504-1.413-0.797-1.971-1.385-0.999-1.279-1.323-2.07c-0.324-0.793-0.485-1.645-0.485-2.557-0.01587-1.712 0.63214-3.3636 1.808-4.608 0.557-0.588 1.215-1.051 1.971-1.387s1.561-0.504 2.412-0.504c0.8357-5e-3 1.6632 0.1646 2.43 0.497zm-0.612 10.654c0.56076-0.25517 1.0655-0.61883 1.485-1.07 0.426-0.455 0.762-0.99 1.008-1.602 0.24912-0.63014 0.37441-1.3024 0.369-1.98 0-0.719-0.12-1.385-0.36-1.998-0.22574-0.5888-0.56174-1.1291-0.99-1.592-0.41853-0.44983-0.92318-0.81098-1.484-1.062-0.58038-0.26013-1.21-0.39213-1.846-0.387-0.647 0-1.254 0.129-1.817 0.387-0.56064 0.25538-1.0653 0.61901-1.485 1.07-0.426 0.457-0.763 0.99-1.008 1.602-0.24922 0.63012-0.37451 1.3024-0.369 1.98 0 0.709 0.123 1.371 0.369 1.99 0.245 0.617 0.582 1.15 1.008 1.602 0.426 0.449 0.921 0.803 1.485 1.061 0.563 0.26 1.17 0.389 1.817 0.389 0.62717 4e-3 1.2476-0.12912 1.818-0.39zm15.21 1.649h-7.956v-12.493h1.53v11.016h6.426zm10.513-12.303c0.756 0.33 1.412 0.785 1.971 1.367 0.558 0.582 0.996 1.27 1.313 2.061 0.318 0.793 0.478 1.65 0.478 2.574 0.01285 1.7173-0.6348 3.3738-1.809 4.627-0.558 0.588-1.215 1.049-1.971 1.385s-1.56 0.504-2.412 0.504-1.656-0.168-2.412-0.504-1.413-0.797-1.971-1.385-0.999-1.279-1.323-2.07c-0.324-0.793-0.485-1.645-0.485-2.557-0.01587-1.712 0.63214-3.3636 1.808-4.608 0.557-0.588 1.215-1.051 1.971-1.387s1.561-0.504 2.412-0.504c0.83568-4e-3 1.6632 0.16479 2.43 0.497zm-0.613 10.654c0.56076-0.25517 1.0655-0.61883 1.485-1.07 0.426-0.455 0.762-0.99 1.008-1.602 0.24912-0.63014 0.37441-1.3024 0.369-1.98 0-0.719-0.12-1.385-0.36-1.998-0.22574-0.5888-0.56174-1.1291-0.99-1.592-0.41853-0.44983-0.92318-0.81098-1.484-1.062-0.58038-0.26013-1.21-0.39213-1.846-0.387-0.647 0-1.254 0.129-1.817 0.387-0.56064 0.25538-1.0653 0.61901-1.485 1.07-0.426 0.457-0.763 0.99-1.008 1.602-0.24922 0.63012-0.37451 1.3024-0.369 1.98 0 0.709 0.123 1.371 0.369 1.99 0.245 0.617 0.582 1.15 1.008 1.602 0.426 0.449 0.921 0.803 1.485 1.061 0.563 0.26 1.17 0.389 1.817 0.389 0.62718 4e-3 1.2477-0.12903 1.818-0.39zm17.532-0.584c-0.36014 0.50349-0.79753 0.94695-1.296 1.314-0.49864 0.36307-1.0514 0.6452-1.638 0.836-0.6159 0.20092-1.2602 0.30121-1.908 0.297-0.852 0-1.656-0.17-2.412-0.512s-1.413-0.807-1.971-1.396c-0.56626-0.60067-1.015-1.3021-1.323-2.068-0.324-0.793-0.485-1.639-0.485-2.539s0.161-1.742 0.485-2.529c0.324-0.785 0.766-1.473 1.323-2.061s1.215-1.053 1.971-1.395 1.561-0.514 2.412-0.514c0.708 0 1.368 0.102 1.98 0.307 1.1801 0.38462 2.2014 1.1459 2.907 2.167 0.354 0.512 0.633 1.072 0.837 1.684h-1.603c-0.33544-0.77553-0.87321-1.4466-1.557-1.943-0.69-0.504-1.545-0.756-2.565-0.756-0.62747-5e-3 -1.2481 0.1302-1.817 0.395-0.56113 0.26337-1.0655 0.63361-1.485 1.09-0.43192 0.47067-0.77361 1.0168-1.008 1.611-0.246 0.611-0.369 1.26-0.369 1.943s0.123 1.332 0.369 1.943c0.245 0.613 0.582 1.15 1.008 1.611 0.426 0.463 0.921 0.826 1.485 1.09 0.56879 0.26515 1.1895 0.40042 1.817 0.396 0.924 0 1.746-0.244 2.466-0.73 0.721-0.484 1.272-1.143 1.656-1.971h1.603c-0.20552 0.61766-0.50285 1.2009-0.882 1.73zm11.394-10.07c0.756 0.33 1.413 0.785 1.971 1.367 0.559 0.582 0.996 1.27 1.314 2.061 0.317 0.793 0.477 1.65 0.477 2.574 0 0.912-0.162 1.764-0.485 2.557-0.324 0.791-0.766 1.482-1.323 2.07s-1.215 1.049-1.971 1.385c-0.75937 0.3365-1.5814 0.50827-2.412 0.504-0.853 0-1.656-0.168-2.412-0.504s-1.413-0.797-1.972-1.385c-1.1738-1.2533-1.8211-2.9098-1.808-4.627-0.01338-1.7115 0.63428-3.3622 1.808-4.608 0.559-0.588 1.216-1.051 1.972-1.387s1.56-0.504 2.412-0.504c0.83537-5e-3 1.6626 0.16471 2.429 0.497zm-0.612 10.654c0.56105-0.25467 1.0658-0.61839 1.485-1.07 0.426-0.455 0.762-0.99 1.008-1.602s0.369-1.271 0.369-1.98c0-0.719-0.12-1.385-0.36-1.998-0.22539-0.58875-0.56106-1.1291-0.989-1.592-0.421-0.451-0.915-0.805-1.485-1.062s-1.186-0.387-1.845-0.387c-0.648 0-1.254 0.129-1.818 0.387s-1.06 0.615-1.485 1.07c-0.426 0.457-0.762 0.99-1.008 1.602-0.24922 0.63012-0.37451 1.3024-0.369 1.98 0 0.709 0.123 1.371 0.369 1.99 0.246 0.617 0.582 1.15 1.008 1.602 0.426 0.449 0.921 0.803 1.485 1.061 0.57028 0.261 1.1909 0.39378 1.818 0.389 0.62684 4e-3 1.247-0.12923 1.817-0.39zm19.243 1.649h-1.53v-10.459l-3.654 10.459h-1.638l-3.654-10.459v10.459h-1.53v-12.493h2.34l3.673 10.529 3.672-10.529h2.322v12.493z" fill="#575757"/>
              <Path d="m45.36 114.12c0.042 4e-3 0.08 8e-3 0.118 0.015 2.447 0.195 4.849 0.174 7.247 0.066 0.213-0.971 0.436-1.939 0.744-2.878 4.378-13.475 17.313-22.117 31.462-21.005 3.438 0.268 6.697 1.127 9.698 2.428 1.533-1.909 2.937-3.916 4.212-6.021-4.079-1.963-8.568-3.252-13.348-3.625-17.493-1.372-33.493 9.309-38.915 25.985-0.531 1.643-0.914 3.329-1.218 5.035" fill="#a3a3a2"/>
              <Path d="m35.916 112.5c0.387-2.168 0.895-4.312 1.571-6.395 6.784-20.88 26.833-34.264 48.752-32.543 5.953 0.463 11.637 2.047 16.862 4.561 0.429-1.076 0.861-2.155 1.218-3.271 0.44-1.328 0.805-2.688 1.138-4.064-5.805-2.658-12.066-4.356-18.622-4.868-25.459-1.997-48.748 13.555-56.64 37.819-0.675 2.098-1.229 4.238-1.654 6.414 2.371 0.961 4.856 1.71 7.375 2.347" fill="#7e7e7c"/>
              <Path d="m104.32 74.848c0.451-1.387 0.835-2.808 1.173-4.242-9.501-5.758-15.519-16.516-14.6-28.335 0.19-2.398 0.66-4.764 1.396-7.029 1.173-3.618 2.986-6.866 5.255-9.686-1.45-2.184-3.032-4.274-4.777-6.236-3.415 3.836-6.098 8.404-7.771 13.553-0.922 2.84-1.502 5.796-1.742 8.799-1.203 15.444 7.054 29.466 19.855 36.406 0.43-1.065 0.855-2.129 1.211-3.23" fill="#a3a3a2"/>
              <Path d="m94.734 92.62c1.499-1.891 2.884-3.878 4.136-5.961-16.201-8.628-26.666-26.286-25.144-45.738 0.296-3.764 1.021-7.479 2.182-11.034 2.129-6.555 5.563-12.375 9.945-17.224-1.886-1.518-3.874-2.899-5.938-4.172-4.773 5.45-8.537 11.9-10.889 19.153-1.332 4.104-2.178 8.378-2.527 12.709-1.731 22.107 9.993 42.182 28.235 52.267" fill="#80807f"/>
              <Path d="m54.045 45.553c1.764-5.431 2.895-11.1 3.339-16.85 0.781-9.969-0.493-19.637-3.472-28.572-3.229-0.226-6.408-0.148-9.52 0.155 3.278 8.568 4.77 17.973 4.007 27.713-0.395 5.035-1.381 10.013-2.926 14.769-6.988 21.5-24.449 37.049-45.473 42.142 1.548 2.791 3.365 5.409 5.354 7.9 22.556-6.57 41.076-23.813 48.691-47.257" fill="#575756"/>
              <Path d="m28.696 4.122c6.131 9.916 16.702 16.905 29.189 17.888 10.533 0.827 20.508-2.743 27.975-9.336-1.935-1.569-3.996-2.984-6.135-4.293-5.866 4.608-13.379 7.033-21.278 6.41-9.47-0.745-17.602-5.758-22.667-12.997-2.429 0.618-4.785 1.404-7.084 2.328" fill="#a3a3a2"/>
              <Path d="m13.868 12.854c8.89 14.593 24.37 24.898 42.659 26.33 15.435 1.208 30.047-4.056 40.94-13.766-1.434-2.129-2.99-4.168-4.682-6.088-9.41 8.598-22.173 13.272-35.651 12.215-15.939-1.25-29.405-10.314-37.009-23.112-2.182 1.34-4.273 2.812-6.257 4.421" fill="#7e7e7c"/>
              <Path d="m105.2 42.624c-0.797-3.043-1.783-6.002-3.054-8.835-12.544 10.785-29.129 16.601-46.635 15.23-17.002-1.337-32.467-9.212-43.554-22.177-1.916-2.254-3.597-4.638-5.179-7.086-2.037 2.345-3.893 4.853-5.528 7.524 1.275 1.797 2.622 3.544 4.071 5.238 12.593 14.733 30.176 23.689 49.507 25.209 18.683 1.464 36.47-4.252 50.372-15.103" fill="#575756"/>
            </G>
          </G>
        </G>
      </Svg>
    )
  }
}