import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"

export default function Calendar() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="bg-grdadient-to-br from-indigo-50 to-purple-50 h-full scale-80 -translate-y-[10%]">
        <div className="mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 hover:shadow-3xl transition-all duration-500">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Calendar</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
            </div>

            <div className="relative h-full">
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-indigo-200 rounded-full opacity-60"></div>
              <div className="absolute -top-1 -right-3 w-3 h-3 bg-purple-200 rounded-full opacity-60"></div>
              <div className="absolute -bottom-2 -left-3 w-2 h-2 bg-pink-200 rounded-full opacity-60"></div>

              <DateCalendar
                sx={{
                  width: 320,
                  height: 320,
                  "& .MuiPickersDay-root": {
                    borderRadius: "12px",
                    "&:hover": {
                      backgroundColor: "#e0e7ff",
                    },
                    "&.Mui-selected": {
                      backgroundColor: "#6366f1",
                      "&:hover": {
                        backgroundColor: "#5b21b6",
                      },
                    },
                  },
                  "& .MuiPickersCalendarHeader-root": {
                    paddingLeft: "16px",
                    paddingRight: "16px",
                  },
                  "& .MuiPickersArrowSwitcher-root": {
                    "& .MuiIconButton-root": {
                      backgroundColor: "#f8fafc",
                      "&:hover": {
                        backgroundColor: "#e2e8f0",
                      },
                    },
                  },
                }}
                
              />
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  )
}
