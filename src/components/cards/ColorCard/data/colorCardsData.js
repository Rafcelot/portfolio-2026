// UI Icons
import BrushIcon from "@/components/ui/icons/BrushIcon/BrushIcon.jsx";
import PaintbrushIcon from "@/components/ui/icons/PaintbrushIcon/PaintbrushIcon.jsx";
import TextIcon from "@/components/ui/icons/TextIcon/TextIcon.jsx";
import DoubleIcon from "@/components/ui/icons/Double/Double.jsx";

export const variantConfig = {
  interface: [
    {
      id: "brand",
      title: "Eden",
      description: "Primary brand color, used on primary buttons, badges, and map pins.",
      colors: {
        regular: "rgba(9, 83, 77, 1)",
        light: "rgba(229, 250, 241, 1)",
        dark: "rgba(5, 38, 41, 1)",
      },
    },
    {
      id: "emphasis",
      title: "Electric Violet",
      description: "Used to highlight actions, emphasize key elements, and guide user focus.",
      colors: {
        regular: "rgba(174, 60, 236, 1)",
        light: "rgba(243, 229, 250, 1)",
        dark: "rgba(59, 25, 76, 1)",
      },
    },
    {
      id: "informational",
      title: "Blue",
      description: "Informational color, used for alerts, badges, and pins.",
      colors: {
        regular: "rgba(46, 119, 184, 1)",
        light: "rgba(225, 240, 254, 1)",
        dark: "rgba(31, 80, 122, 1)",
      },
    },
    {
      id: "alert",
      title: "Red",
      description: "Red is used to indicate errors, warnings, or destructive actions.",
      colors: {
        regular: "rgba(145, 8, 8, 1)",
        light: "rgba(250, 229, 229, 1)",
        dark: "rgba(87, 5, 5, 1)",
      },
    },
    {
      id: "warning",
      title: "Orange",
      description: "Warning color, applied across alerts, badges, indicators and errors.",
      colors: {
        regular: "rgba(203, 77, 26, 1)",
        light: "rgba(255, 237, 221, 1)",
        dark: "rgba(138, 48, 14, 1)",
      },
    },
    {
      id: "success",
      title: "Green",
      description: "Success color, used for alerts, badges, and indicating overall status.",
      colors: {
        regular: "rgba(66, 122, 31, 1)",
        light: "rgba(220, 247, 212, 1)",
        dark: "rgba(35, 48, 3, 1)",
      },
      
    },
  ],

  gray: [
    {
      id: "black-dark",
      title: "Black Dark",
      description: "Media background and overlay color, also used for shadows.",
      colors: {
        regular: "rgba(0, 0, 0, 1)",
        iconColor: "rgba(255, 255, 255, 1)"
      },
      icon: BrushIcon,
    },
    {
      id: "black-regular",
      title: "Black Regular",
      description: "Primary text and icon color, used consistently in all aspects of the UI.",
      colors: {
        regular: "rgba(45, 46, 47, 1)",
        iconColor: "rgba(255, 255, 255, 1)"
      },
      icon: DoubleIcon,
    },
    {
      id: "black-light",
      title: "Black Light",
      description: "Secondary text and icon color, used for UI elements tha need less emphasis.",
      colors: {
        regular: "rgba(107, 109, 111, 1)",
        iconColor: "rgba(255, 255, 255, 1)"
      },
      icon: DoubleIcon,
    },
    {
      id: "gray-dark",
      title: "Gray Dark",
      description: "Tertiary icon color,used for UI that need less emphasis",
      colors: {
        regular: "rgba(137, 138, 139, 1)",
        iconColor: "rgba(255, 255, 255, 1)"
      },
      icon: PaintbrushIcon,
    },
    {
      id: "gray-regular",
      title: "Gray Regular",
      description: "Used for UI elements that need low emphasis, including disabled components.",
      colors: {
        regular: "rgba(200, 201, 202, 1)"        
      },
      icon: null,
    },
    {
      id: "gray-light",
      title: "Gray Light",
      description: "Used for illustrations, graphics, and disabled components.",
      colors: {
        regular: "rgba(227, 227, 227, 1)",
      },
      icon: null,
    },
    {
      id: "silver-dark",
      title: "Silver Dark",
      description: "Section divide color, also used for teartiary button background",
      colors: {
        regular: "rgba(230, 230, 230, 1)",
        iconColor: "rgba(45, 46, 47, 1)"
      },
      icon: BrushIcon,
    },
    {
      id: "silver-regular",
      title: "Silver Regular",
      description: "Tertiary background color, used to separate a section from one with a Silver Light background",
      colors: {
        regular: "rgba(240, 240, 240, 1)",
        iconColor: "rgba(45, 46, 47, 1)"
      },
      icon: BrushIcon,
      
    },
    {
      id: "silver-light",
      title: "Silver Light",
      description: "Secondary background color, used to separate a section from one with a white background. ",
      colors: {
        regular: "rgba(247, 247, 247, 1)",
        iconColor: "rgba(45, 46, 47, 1)"
      },
      icon: BrushIcon,
    },
  ],
};




