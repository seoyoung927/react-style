// 각 variant에 대한 색상 코드 정의
const colorMap = {
  default: {
    500: "#E0E0E0", // 기본 회색
    600: "#BDBDBD", // 어두운 회색
    700: "#9E9E9E", // 더 어두운 회색
    300: "#EEEEEE", // 밝은 회색
  },
  primary: {
    500: "#2196F3", // 파란색
    600: "#1E88E5", // 어두운 파란색
    700: "#1976D2", // 더 어두운 파란색
    300: "#64B5F6", // 밝은 파란색
  },
  success: {
    500: "#4CAF50", // 녹색
    600: "#43A047", // 어두운 녹색
    700: "#388E3C", // 더 어두운 녹색
    300: "#81C784", // 밝은 녹색
  },
  warning: {
    500: "#FFC107", // 황금색
    600: "#FFB300", // 어두운 황금색
    700: "#FFA000", // 더 어두운 황금색
    300: "#FFD54F", // 밝은 황금색
  },
  error: {
    500: "#F44336", // 빨간색
    600: "#E53935", // 어두운 빨간색
    700: "#D32F2F", // 더 어두운 빨간색
    300: "#E57373", // 밝은 빨간색
  },
};

// 색상을 반환하는 함수들
export const get500Color = (variant) => colorMap[variant]?.["500"] || colorMap.default["500"];
export const get600Color = (variant) => colorMap[variant]?.["600"] || colorMap.default["600"];
export const get700Color = (variant) => colorMap[variant]?.["700"] || colorMap.default["700"];
export const get300Color = (variant) => colorMap[variant]?.["300"] || colorMap.default["300"];
