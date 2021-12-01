import "../assets/css/preloader.css";
//preloader component
const Preloader = ({ loading }: { loading: boolean | undefined }) => {
  return (
    <div className={"preloader " + (loading ? "show_preloader" : "hide_preloader")}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="400" height="100">
        <circle transform="translate(8 0)" cx="0" cy="16" r="0" stroke="blue" fill="transparent">
          <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0" keyTimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />
        </circle>
        <circle transform="translate(16 0)" cx="0" cy="16" r="0" stroke="blue" fill="transparent">
          <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0.3" keyTimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />
        </circle>
        <circle transform="translate(24 0)" cx="0" cy="16" r="0" fill="transparent" stroke="blue">
          <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0.6" keyTimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />
        </circle>
        <circle transform="translate(32 0)" cx="0" cy="16" r="0" fill="transparent" stroke="blue">
          <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0.9" keyTimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />
        </circle>
      </svg>
    </div>
  );
};
export default Preloader;
