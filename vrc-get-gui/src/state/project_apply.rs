use std::sync::Mutex;
use vrc_get_vpm::AbortCheck;

pub struct ProjectApplyState {
    current: Mutex<Option<AbortCheck>>,
}

impl ProjectApplyState {
    pub fn new() -> Self {
        Self {
            current: Mutex::new(None),
        }
    }

    pub fn start(&self, abort: AbortCheck) {
        *self.current.lock().unwrap() = Some(abort);
    }

    pub fn finish(&self) {
        *self.current.lock().unwrap() = None;
    }

    pub fn abort(&self) -> bool {
        let Some(abort) = self.current.lock().unwrap().clone() else {
            return false;
        };
        abort.abort();
        true
    }

    pub fn is_running(&self) -> bool {
        self.current.lock().unwrap().is_some()
    }
}
